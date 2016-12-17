/**
 * util
 * Filters that do something with objects or arrays
 */

/**
 * isActiveOption
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

export {
	inArray
}
