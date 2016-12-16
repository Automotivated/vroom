<template>
	<div class="amv-vrm">
		<loader></loader>
		<topbar></topbar>
		<sidebar></sidebar>
		<results></results>
		<credits></credits>
	</div>
</template>


<script>
import Loader from './views/Loader'
import Topbar from './views/Topbar'
import Sidebar from './views/Sidebar'
import Results from './views/Results'
import Credits from './views/Credits'

export default {
	name: 'App',
	components: {
		Loader,
		Topbar,
		Sidebar,
		Results,
		Credits
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
