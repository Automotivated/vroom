/**
 * history
 * Filter to keep track of the history of the browser
 */

// eslint-disable-next-line no-useless-escape
const multiRegex = new RegExp(/\[\]/, 'gi')
// eslint-disable-next-line no-useless-escape
const rangeRegex = new RegExp(/\[(from|to)\]/, 'gi')

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
			if (filter === '') {
				return
			}
			const range = filter.match(rangeRegex)
			// range
			if (range) {
				filter = filter.replace(rangeRegex, '').split('=')
				filters.push({
					key: filter[0],
					range: range[0].replace(/\W/g, ''),
					value: getRealValue(filter[1])
				})
			// other filters
			} else {
				filter = filter.replace(multiRegex, '').split('=')
				filters.push({
					key: filter[0],
					value: getRealValue(filter[1])
				})
			}
		})
	}
	return filters
}

/**
 * getRealValue
 *
 * Helper function to return an string or int
 */
function getRealValue (value) {
	const intComparison = /^[+-]?\d+$/.test(value)
	return intComparison
		? parseInt(value)
		: value
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
		state.activeFilters.forEach(filter => {
			locationState += filter.key
			switch (state.filters[filter.key].type) {
			case 'multiple':
				locationState += '[]='
				break
			case 'range':
				locationState += '[' + filter.range + ']='
				break
			default:
				locationState += '='
				break
			}
			locationState += filter.value + '&'
		})

		// fix the & at the end
		locationState = (locationState.length > 1)
			? locationState.slice(0, -1)
			: locationState

		// create a unique title
		let title = document.title
		title += locationState
			.replace(rangeRegex, '')
			.replace(/=/g, ':')
			.replace(/&/g, ', ')

		// push it! push it real good
		window.history.pushState(
			state.activeFilters,
			title,
			locationState
		)
	}
}

export {
	getHistory,
	updateHistory
}
