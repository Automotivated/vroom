/**
 * actions that influence the filters state
 */

import * as types from '../../types'

/**
 * addFilter
 */
export const addFilter = ({ commit, state }, payload) => {
	commit(types.ADD_FILTER, {
		key: payload.key,
		value: payload.value
	})
	// update the history
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
