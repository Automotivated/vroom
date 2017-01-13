<template>
	<div class="vrm-filter__multiple" v-cloak>
		<h5>
			{{ $t(filter.label) }}
			<i v-svg:chevron-right></i>
		</h5>
	</div>
</template>

<script>
// import scripts
import '../../../directives/svg'

export default {
	name: 'MultipleSearch',
	props: ['filter']
}
</script>
