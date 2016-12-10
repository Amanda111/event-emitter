var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function(arg) { 
  console.log('some_event 事件触发'+ arg); 
}); 
setTimeout(function() { 
  event.emit('some_event','haha'); 
}, 1000); 