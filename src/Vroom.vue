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
// import styles
import 'elements/base'
import 'elements/typography'
import 'elements/forms'
import 'vroom'

// import scripts
import { getHistory } from './filters/history'

// import templates
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
	methods: {
		getHistory
	},
	created () {
		// Update the active filters with active query params
		this.$store.dispatch('filters/addFilter', this.getHistory())

		// Add the initial window state
		if (window.history.pushState) {
			// bind popstate event listener for history events
			window.addEventListener('popstate', (evt) => {
				if (evt.state) {
					console.log('do something smart here')
				}
			}, false)
		}
	},
	mounted () {
		// vue is mounted, so we're finished loading all offline contents
		this.$store.dispatch('app/finishedInit')
	},
	watch: {

	}
}
</script>
