<template>
	<div class="vrm-app">
		<topbar></topbar>
	</div>
</template>


<script>
import Topbar from './views/Topbar'

export default {
	name: 'App',
	components: {
		Topbar
	},
	data () {
		return {
			error: {}
		}
	},
	// vue is created
	created () {

	},
	// vue is mounted
	mounted () {

	},
	watch: {

	}
}
</script>
