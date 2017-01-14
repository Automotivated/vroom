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
	var startTimestamp = new Date()
	var timeout = Math.floor(Math.random() * (900 - 250 + 1) + 250)

	// set loading state to true
	commit('app/' + types.TOGGLE_LOADING, true, { root: true })

	// fake api call for the time being
	setTimeout(() => {
		commit(types.UPDATE_RESULTS, {})
		// todo... actual api call offcourse
		// console.log('do stuff')

		// commit new loading state
		commit('app/' + types.TOGGLE_LOADING, false, { root: true })

		// calculate the difference between request and response
		var difference = new Date().getTime() - startTimestamp.getTime()
		commit('app/' + types.ADD_DELAY, difference, { root: true })
	}, timeout)
}
