<template>
	<div class="amv-vrm">
		<loader></loader>
		<sidebar></sidebar>
		<workspace></workspace>
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
import './directives/svg'

// import templates
import Loader from './views/Loader'
import Sidebar from './views/Sidebar'
import Workspace from './views/Workspace'
import Credits from './views/Credits'

export default {
	name: 'App',
	components: {
		Loader,
		Sidebar,
		Workspace,
		Credits
	},
	data () {
		return {
			debouncedUpdate: null,
			error: {}
		}
	},
	computed: {
		...mapGetters({
			options: 'app/options',
			activeFilters: 'filters/filteredActiveFilters'
		})
	},
	methods: {
		getHistory,
		findActiveFilterIndex
	},
	created () {
		// Update the active filters with active query params
		const currentHistory = this.getHistory()
		if (currentHistory.length > 0) {
			this.$store.dispatch('filters/addFilter', this.getHistory())
		} else {
			this.$store.dispatch('results/getData')
		}

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
						// check for ranged filters
						} else if (item.range && this.activeFilters[index].value !== item.value) {
							this.$store.dispatch('filters/updateFilter', [item])
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
		/**
		 * Watch the activeFilter object for changes and do a debounced update
		 * If the debounce is a bit weird or out of balance, adjust it in the options
		 */
		'activeFilters' () {
			if (typeof this.debouncedUpdate === 'number') {
				window.clearTimeout(this.debouncedUpdate)
				this.debouncedUpdate = null
			}
			this.debouncedUpdate = window.setTimeout(() => {
				this.$store.dispatch('results/getData')
			}, this.options.debounce)
		}
	}
}
</script>
