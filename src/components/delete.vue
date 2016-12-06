<template>
	<div class="wrap">
		<button v-on:click="remove(todo)">delete</button>
	</div>
</template>
<script>
import { bus } from '../bus.js'
	export default{
		props:{
			todo:{
				Type:Object
			}
		},
		methods:{
			remove(todo){
				bus.$emit('remove',this.todo)
			}
		}
	}
</script>