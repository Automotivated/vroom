<template>
	<div :class="['vrm-loader', {'vrm-loading': loading}]"  :style="{ animationDuration: loadingDelay + 'ms' }"></div>
</template>

<script>
	// import styles
	import 'components/loader'

	// import scripts
	import { mapGetters } from 'vuex'

	// import scripts
	export default {
		name: 'Loader',
		computed: {
			...mapGetters([
				'loading',
				'loadingDelay'
			])
		}
	}
</script>
