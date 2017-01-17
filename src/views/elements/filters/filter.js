/**
 * Filter mixin
 *
 * Use the same code for different views.
 * Each view is a component, but share these functions
 */

// import scripts
import Vue from 'vue'
import { inArray } from '../../../filters/util'

export default {
	props: ['filter'],
	data () {
		return {
			limit: 4,
			limited: true,
			expanded: true
		}
	},
	computed: {
		// options for this filter to slice
		visibleOptions () {
			let limit = 0
			var stack = this.filter.options

			if (this.expanded === null && this.filter.active.length > 0) {
				this.expanded = (this.filter.active.length > 0)
			}

			if (this.expanded === true) {
				limit = (this.limited)
					? this.limit
					: undefined
			}
			return stack.slice(0, limit)
		},
		showMore () {
			return (this.filter.options.length > this.limit)
		},
		// toggle text that toggles
		toggleText () {
			return (
				this.limited
					? Vue.i18n.translate('filters.global.more')
					: Vue.i18n.translate('filters.global.less')
				) + '&hellip;'
		}
	},
	methods: {
		inArray,
		collapse () {
			this.expanded = !this.expanded
		},
		toggle () {
			this.limited = !this.limited
		},
		updateFilter (evt) {
			const elm = evt.target || evt.srcElement
			const action = elm.checked === false
				? 'filters/removeFilter'
				: 'filters/addFilter'
			const value = /^[+-]?\d+$/.test(elm.value)
				? parseInt(elm.value)
				: elm.value

			this.$store.dispatch(action, [{
				key: elm.name,
				value: value
			}])
		}
	}
}
