<template>
	<div class="vrm-results">
		Results template
	</div>
</template>

<script>
// import styles
import 'components/results'

// import scripts
import { mapGetters } from 'vuex'

export default {
	name: 'Results',
	computed: {
		...mapGetters({
			activeFilters: 'filters/filteredActiveFilters'
		})
	}
}
</script>
