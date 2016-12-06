import Vue from 'vue'
import Todo from './components/todos.vue'

new Vue({
  el: '#app',
  render: h => h(Todo)
})