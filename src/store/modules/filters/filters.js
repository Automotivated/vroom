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
		// adds an active option
		[types.ADD_ACTIVE_OPTION] (state, filter) {
			// const active = getActive(filter)
			// push the new state
			state.active.push(filter.value)
		}
	},
	getters: {
		filteredActiveFilters: (state) => {
			var stack = state.filters.activeFilters
			return stack
		}
	},
	actions
}

export default filters
