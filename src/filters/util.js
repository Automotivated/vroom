/**
 * util
 * Filters that do something with objects or arrays
 */

/**
 * inArray
 * Checks wheter the option (needle) exists in the active array (haystack)
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

// /**
//  * getActiveFilterkey
//  *
//  * searches in the haystack for a match
//  * if found return the index of the filter
//  * otherwise return false
//  */
// function getActiveFilterKey (filter, haystack, matching) {
// 	let isActiveFilter = false

// 	if (filter.key !== undefined) {
// 		// check if the provided filter is already present in the activeFilters
// 		for (let i = 0, l = haystack.length; i < l; i++) {
// 			if (haystack[i].key === filter.key) {
// 				if (matching === true && filter.value !== undefined && haystack[i].value === filter.value) {
// 					isActiveFilter = i
// 					break
// 				} else if (matching === false) {
// 					isActiveFilter = i
// 					break
// 				}
// 			}
// 		}
// 	}
// 	return isActiveFilter
// }

export {
	inArray
}
