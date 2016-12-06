<template>
	<div class="wrap">
		<div v-for="todo in todos">{{ todo }}<delbutton :todo="todo"></delbutton></div>
	</div>
</template>
<script>
	import delbutton from './delete'
	export default {
		props:{
			todos:{
				Type: Array
			}
		},
		components:{
			delbutton
		}
	}
</script>