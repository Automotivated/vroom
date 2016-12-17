<template>
	<div class="vrm-sidebar">
		<stats></stats>
		<filters></filters>
	</div>
</template>

<script>
// import styles
import 'components/sidebar'

// import components
import Stats from './Stats.vue'
import Filters from './Filters.vue'

export default {
	name: 'Sidebar',
	components: {
		Stats,
		Filters
	}
}
</script>
