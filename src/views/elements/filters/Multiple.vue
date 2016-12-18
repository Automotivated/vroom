<template>
	<div class="vrm-filter__multiple" v-cloak>
		<h5 @click="collapse">{{ $t(filter.label) }}</h5>
		<ul>
			<li v-for="option in visibleOptions">
				<input
					type="checkbox"
					:id="getUniqueId(option.value)"
					:name="filter.key"
					:value="option.value"
					:checked="inArray(option.value, filter.active)"
					@change="updateFilter">
				<label :for="getUniqueId(option.value)">
					{{ $t(option.label) }}
				</label>
				<span v-text="option.total"></span>
			</li>
		</ul>
		<a href="#" v-if="showMore" v-show="expanded" @click.prevent="toggle" v-html="toggleText"></a>
	</div>
</template>

<script>
// import styles
import 'components/multiple'
// import scripts
import Vue from 'vue'
import { inArray } from '../../../filters/util'

export default {
	name: 'Multiple',
	props: ['filter'],
	data () {
		return {
			limit: 4,
			limited: true,
			expanded: true // change to null to start collapsed
		}
	},
	computed: {
		showMore () {
			return (this.filter.options.length > this.limit)
		},
		// toggle text that toggles
		toggleText () {
			return this.limited
				? Vue.i18n.translate(this.filter.label.replace('label', 'more'))
				: Vue.i18n.translate(this.filter.label.replace('label', 'less'))
		},
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
		}
	},
	methods: {
		inArray,
		getUniqueId (option) {
			option = (typeof option === 'string')
				? option.toLowerCase()
				: option.toString()
			return 'filter-' + this.filter.key + '-' + option
		},
		collapse () {
			this.expanded = !this.expanded
		},
		toggle () {
			this.limited = !this.limited
		},
		updateFilter (evt) {
			var elm = evt.target || evt.srcElement
			if (elm.checked === false) {
				console.log('off', elm.name, elm.value)
			} else {
				this.$store.dispatch('filters/addFilter', {
					key: elm.name,
					value: elm.value,
					updateHistory: true
				})
			}
		}
	}
}
</script>
