<template>
	<div class="wrap">
		<input type="text" v-model="todo">
		<button v-on:click="add">Add</button>
	</div>
</template>
<script>
import { bus } from '../bus.js'
export default {
	data(){
		return {
			todo:''
		}
	},
	methods:{
		add() {
			bus.$emit('add',this.todo)
			this.todo=''
		}
	}
}
</script>