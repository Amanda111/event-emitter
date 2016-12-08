function Emitter(){
  this.events = {};

  this.emit = (eventName,data) =>{
    const event = this.events[eventName];
    if( event ) {
      event.forEach(fn => {
        fn.call(null, data);
      });
    }    
  }

  this.subscribe = (eventName, fn) =>{
    if(!this.events[eventName]) {
      this.events[eventName] = [];
    }
    
    this.events[eventName].push(fn);
    return () => {
      this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let input = document.querySelector('input[type="text"]');
  let button = document.getElementById('btno');
  let buttont = document.getElementById('btnt')
  let h1 = document.querySelector('h1');

  let emitter = new Emitter();
  button.addEventListener('click', () => {
    emitter.emit('name-changed', {name: input.value});
  });
  buttont.addEventListener('click', () => {
    emitter.emit('color', {color: 'red'});
  });
  emitter.subscribe('name-changed', data => {
    h1.innerHTML = `Your name is: ${data.name}`;
  });
  emitter.subscribe('color', data => {
    h1.style.color = data.color;
  });
});



