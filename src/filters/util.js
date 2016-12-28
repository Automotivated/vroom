/**
 * util
 * Filters that do something with objects or arrays
 */

/**
 * inArray
 * Checks wheter the option (needle) exists in the active array (haystack)
 *
 * @return bool
 */
function inArray (needle, haystack) {
	const intComparison = /^[+-]?\d+$/.test(needle)
	for (let i = 0, l = haystack.length; i < l; i++) {
		if ((intComparison && parseInt(haystack[i], 10) === parseInt(needle, 10)) || (haystack[i] === needle)) {
			return true
		}
	}
	return false
}

/**
 * findActiveFilterIndex
 *
 * Searches in the haystack for a match
 *
 * @return int
 */
function findActiveFilterIndex (filter, haystack) {
	return haystack.findIndex((active, index) => {
		return (active.key === filter.key &&
			(filter.range !== undefined && filter.range === active.range) ||
			(active.value === filter.value)
		)
	})
}

export {
	inArray,
	findActiveFilterIndex
}
