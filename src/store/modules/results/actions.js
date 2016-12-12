/**
 * actions that influence the app state
 */

import * as types from '../../types'

/**
 * updateOptions
 *
 * Get's called when creating the app to get the options in the state instead of a global window object :)
 */
export const getData = ({ commit, state }) => {
	const results = {}
	commit(types.UPDATE_RESULTS, results)
}
