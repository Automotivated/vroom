/**
 * actions that influence the stats state
 */

import * as types from '../../types'

/**
 * setDisplay
 */
export const setDisplay = ({ commit, state }, display) => {
	commit(types.UPDATE_DISPLAY, display)
}
/**
 * setSize
 */
export const setSize = ({ commit, state }, size) => {
	commit(types.UPDATE_SIZE, size)
}
/**
 * setOrder
 */
export const setOrder = ({ commit, state }, order) => {
	commit(types.UPDATE_ORDER, order)
}
/**
 * setOffset
 */
export const setOffset = ({ commit, state }, offset) => {
	commit(types.UPDATE_OFFSET, offset)
}
