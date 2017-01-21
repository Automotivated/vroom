<template>
	<div class="vrm-workspace">
		<active v-if="showActive"></active>
		<controls v-if="showControls"></controls>
		<stats v-if="isMobile"></stats>
		<results></results>
	</div>
</template>

<script>
// import styles
import 'components/workspace'

// import scripts
import { mapGetters } from 'vuex'
import Active from './Active.vue'
import Controls from './Controls.vue'
import Stats from './Stats.vue'
import Results from './Results.vue'

export default {
	name: 'Workspace',
	components: {
		Active,
		Controls,
		Stats,
		Results
	},
	computed: {
		...mapGetters({
			isMobile: 'app/isMobile',
			showActive: 'app/showActive',
			showControls: 'app/showControls'
		})
	}
}
</script>
