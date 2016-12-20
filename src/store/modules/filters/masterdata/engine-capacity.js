/**
 * Masterdata for engine-capacity types
 */
export const engineCapacity = {
	type: 'range',
	label: 'filters.masterdata.engine_capacity.label',
	key: 'engine-capacity',
	locale: true,
	from: {
		label: 'filters.masterdata.engine_capacity.from.label',
		active: []
	},
	to: {
		label: 'filters.masterdata.engine_capacity.to.label',
		active: []
	},
	options: [
		500,
		1000,
		1200,
		1400,
		1600,
		1800,
		2000,
		2500,
		2700,
		3000
	]
}
