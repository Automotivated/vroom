/**
 * filter module
 * Most important module there is!
 */
import * as types from '../../types'
import * as actions from './actions'

import { additionalTax } from './masterdata/additional-tax.js'
import { body } from './masterdata/body.js'
import { color } from './masterdata/color.js'
import { doors } from './masterdata/doors.js'
import { energylabel } from './masterdata/energylabel.js'
import { engineCapacity } from './masterdata/engine-capacity.js'
import { fuel } from './masterdata/fuel.js'
import { make } from './masterdata/make.js'
import { mileage } from './masterdata/mileage.js'
import { model } from './masterdata/model.js'
import { options } from './masterdata/options.js'
import { power } from './masterdata/power.js'
import { price } from './masterdata/price.js'
import { search } from './masterdata/search.js'
import { transmission } from './masterdata/transmission.js'
import { type } from './masterdata/type.js'
import { vehicleType } from './masterdata/vehicle-type.js'
import { year } from './masterdata/year.js'

const filters = {
	namespaced: true,
	state: {
		active: [],
		activeFilters: [],
		filters: {
			[additionalTax.key]: additionalTax,
			[body.key]: body,
			[color.key]: color,
			[doors.key]: doors,
			[energylabel.key]: energylabel,
			[engineCapacity.key]: engineCapacity,
			[fuel.key]: fuel,
			[make.key]: make,
			[mileage.key]: mileage,
			[model.key]: model,
			[options.key]: options,
			[power.key]: power,
			[price.key]: price,
			[search.key]: search,
			[transmission.key]: transmission,
			[type.key]: type,
			[vehicleType.key]: vehicleType,
			[year.key]: year
		}
	},
	mutations: {
		[types.ADD_FILTER] (state, filter) {
			state.activeFilters.push(filter)

			if (filter.range) {
				state.filters[filter.key][filter.range].active.push(filter.value)
			} else {
				state.filters[filter.key].active.push(filter.value)
			}
		},
		[types.UPDATE_FILTER] (state, payload) {
			state.activeFilters.splice(payload.index, 1, payload.filter)
			if (payload.filter.range) {
				let active = state.filters[payload.filter.key][payload.filter.range].active
				// empty current actives
				active.splice(0)
				// push the new active
				active.push(payload.filter.value)
			}
		},
		[types.REMOVE_FILTER] (state, payload) {
			state.activeFilters.splice(payload.index, 1)

			if (payload.filter.range) {
				state.filters[payload.filter.key][payload.filter.range].active.splice(0)
			} else {
				const index = state.filters[payload.filter.key].active.findIndex(active => {
					return (active === payload.filter.value)
				})
				if (~index) {
					state.filters[payload.filter.key].active.splice(index, 1)
				}
			}
		}
	},
	getters: {
		getSearch: (state) => {
			return state.filters['keyword']
		},
		filteredActiveFilters: (state) => {
			var stack = state.activeFilters
			return stack
		},
		/**
		 * filteredFilters
		 * Returns a filtered list in order that the user specifies
		 */
		filteredFilters: (state, getters, store) => {
			var filtered = []

			for (var filter of store.app.options.availableFilters) {
				const key = (typeof state.filters[filter] !== 'undefined')
					? filter
					: false
				if (key !== false) {
					const vFilter = state.filters[key]
					// Are we going to sort on checked on top?
					// if (vFilter.type === 'multi') {
					// 	vFilter.options = orderOptions(vFilter)
					// }
					filtered.push(vFilter)
				}
			}
			return filtered
		}
	},
	actions
}

export default filters
