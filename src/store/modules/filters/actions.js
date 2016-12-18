/**
 * actions that influence the filters state
 */

import * as types from '../../types'

/**
 * setDisplay
 */
export const addFilter = ({ commit, state }, payload) => {
	// update filters.activeFilter
	commit(types.ADD_FILTER, {
		key: payload.key,
		value: payload.value
	})
	// add to the active stack
	// update the history
}
