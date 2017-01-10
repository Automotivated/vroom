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
import { mapGetters } from 'vuex'
import { getHistory } from './filters/history'
import { findActiveFilterIndex } from './filters/util'

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
	computed: {
		...mapGetters({
			activeFilters: 'filters/filteredActiveFilters'
		})
	},
	methods: {
		getHistory,
		findActiveFilterIndex
	},
	created () {
		// Update the active filters with active query params
		this.$store.dispatch('filters/addFilter', this.getHistory())

		// Check if we can manipulate the window address bar state
		if (window.history.pushState) {
			// Add the initial window state
			const locationState = (window.location.search)
				? window.location.search
				: '?'
			const activeFilters = (this.activeFilters.length)
				? this.activeFilters
				: []

			// pushing the initial state
			window.history.pushState(
				activeFilters,
				document.title,
				locationState
			)

			// bind popstate event listener for history events
			window.addEventListener('popstate', (evt) => {
				if (evt.state) {
					// disable history updates
					this.$store.dispatch('app/toggleHistory')

					// loop over state filters to add missing active filters
					evt.state.forEach(item => {
						var index = findActiveFilterIndex(item, this.activeFilters)
						if (!~index) {
							this.$store.dispatch('filters/addFilter', [item])
						}
					})
					// loop over active filters to remove state filter
					this.activeFilters.forEach(item => {
						var index = findActiveFilterIndex(item, evt.state)
						if (!~index) {
							this.$store.dispatch('filters/removeFilter', [item])
						}
					})
					// enable history updates
					this.$store.dispatch('app/toggleHistory')
				}
			}, false)
		}
	},
	mounted () {
		// vue is mounted, so we're finished loading all offline contents and can enable history updates
		this.$store.dispatch('app/toggleHistory')
	},
	watch: {

	}
}
</script>
