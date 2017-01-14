<template>
	<div class="vrm-filter__multiple" v-cloak>
		<h5>
			{{ $t(filter.label) }}
			<i v-svg:chevron class="vrm-chevron-right"></i>
		</h5>
	</div>
</template>

<script>
// import scripts
import filter from './filter'

export default {
	name: 'MultipleSearch',
	props: ['filter'],
	mixins: [filter]
}
</script>
