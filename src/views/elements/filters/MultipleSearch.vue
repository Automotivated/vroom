<template>
	<div class="vrm-filter__multiple" v-cloak>
		<h5 @click="collapse">
			{{ $t(filter.label) }}
			<i v-svg:chevron class="vrm-chevron__right" :class="{'vrm-chevron-toggle': !expanded}"></i>
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
