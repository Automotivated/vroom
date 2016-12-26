/**
 * history
 * Filter to keep track of the history of the browser
 */

// eslint-disable-next-line no-useless-escape
const arrayRegex = new RegExp(/\[(.+?)\]/, 'gi')

/**
 * getHistory
 *
 */
function getHistory () {
	// get the initialized filters (eg from the browser location)
	const filters = []
	if (window.location.search) {
		var str = window.location.search.substring(1)
		var parts = str.split('&')
		parts.forEach(filter => {
			filter = filter.replace(arrayRegex, '').split('=')
			console.log(filter)
			filters.push({
				key: filter[0],
				value: filter[1]
			})
		})
	}
	return filters
}

/**
 * updateHistory
 *
 * if we need to update the url of the browser, do it with only the active filters
 */
function updateHistory (state) {
	if (window.history.pushState) {
		let locationState = '?'

		// loop over the active filters for state updates
		state.filters.activeFilters.forEach((active, index) => {
			locationState += active.key
			locationState += (state.filters.filters[active.key] && state.filters.filters[active.key].type === 'multi')
				? '[]='
				: '='
			locationState += active.value + '&'
		})
		// fix the & at the end
		locationState = (locationState.length > 1)
			? locationState.slice(0, -1)
			: locationState

		// create a unique title
		let title = document.title
		title += locationState
			.replace(arrayRegex, '')
			.replace(/=/g, ':')
			.replace(/&/g, ', ')

		// push it! push it real good
		window.history.pushState(
			state.filters.activeFilters,
			title,
			locationState
		)
	}
}

export {
	getHistory,
	updateHistory
}
