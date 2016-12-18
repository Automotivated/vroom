<template>
	<div class="vrm-active">
		hoi
		<div v-for="filter in activeFilters">
			{{ filter }}
		</div>
	</div>
</template>

<script>
// import scripts
import { mapGetters } from 'vuex'

export default {
	name: 'ActiveFilters',
	computed: {
		...mapGetters({
			activeFilters: 'filters/filteredActiveFilters'
		})
	}
}
</script>
