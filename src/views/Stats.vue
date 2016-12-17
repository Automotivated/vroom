<template>
	<div class="vrm-stats" v-cloak>
		<h4>
			<span v-text="normalizeNumber(total)"></span> {{ $t('global.results') }}
		</h4>
	</div>
</template>

<script>
	// import styles
	import 'components/stats'

	// import scripts
	import { mapGetters } from 'vuex'
	import { normalizeNumber } from '../filters/format'

	export default {
		name: 'Stats',
		computed: {
			...mapGetters(['total'])
		},
		methods: {
			normalizeNumber
		}
	}
</script>
