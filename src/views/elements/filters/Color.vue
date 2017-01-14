<template>
	<div class="vrm-filter__color" v-cloak>
		<h5 @click="collapse">{{ $t(filter.label) }}</h5>
		<ul>
			<li v-for="option in filter.options" :key="option.value">
				{{ option }}
			</li>
		</ul>
	</div>
</template>

<script>
// import styles
import 'components/color'

// import scripts
import { inArray } from '../../../filters/util'

export default {
	name: 'Color',
	props: ['filter'],
	data () {
		return {
			expanded: true
		}
	},
	methods: {
		inArray,
		collapse () {
			this.expanded = !this.expanded
		}
	}
}
</script>

