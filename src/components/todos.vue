<template>
	<div class="wrap">
		<inputxt></inputxt>
		<todo :todos="todos"></todo>
		<div v-for="todo in todos">{{ todo }}</div>
	</div>
</template>
<script>
import txt from './input'
import todo from './todo'
import { bus } from '../bus.js'
	export default{
		data(){
			return {
				todos:[]
			}
		},
		components:{
			inputxt:txt,
			todo:todo
		},
		created() {
		  	bus.$on('add', this.addTodo)
		  	bus.$on('remove',this.rmTodo)
		},
		methods:{
			addTodo(newTodo) {
    			this.todos.push(newTodo)
  			},
  			rmTodo(todo){
  				this.todos.splice(this.todos.indexOf(todo),1)
  			}
		}
	}
</script>