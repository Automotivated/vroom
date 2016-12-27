/**
 * actions that influence the filters state
 */

import * as types from '../../types'
import { updateHistory } from '../../../filters/history'

/**
 * addFilter
 */
export const addFilter = ({ commit, state, rootState }, payload) => {
	payload.forEach(filter => {
		commit(types.ADD_FILTER, filter)
	})

	// update the history
	if (rootState.app.loaded) {
		updateHistory(state)
	}
}
/**
 * removeFilter
 */
export const removeFilter = ({ commit, state }, payload) => {
	// if (typeof payload.value !== 'undefined') {
	// 	commit(types.REMOVE_FILTER, {
	// 		key: payload.key
	// 	})
	// } else {
	// 	commit(types.REMOVE_FILTER, {
	// 		key: payload.key
	// 	})
	// }
}
/**
 * updateFilter
 */
export const updateFilter = ({ commit, state }, payload) => {
	// let historyRenewal = false

	// payload.forEach(filter => {
	// 	commit(types.ADD_FILTER, {
	// 		key: filter.key,
	// 		value: filter.value
	// 	})
	// 	if (!historyRenewal && filter.updateHistory) {
	// 		historyRenewal = !historyRenewal
	// 	}
	// })
	// if (historyRenewal) {
	// 	console.log('Update History: ' + historyRenewal)
	// }
	// if (typeof payload.value !== 'undefined') {
	// 	commit(types.REMOVE_FILTER, {
	// 		key: payload.key
	// 	})
	// } else {
	// 	commit(types.REMOVE_FILTER, {
	// 		key: payload.key
	// 	})
	// }
}
