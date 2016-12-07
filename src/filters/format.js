/**
 * format
 * Filters that format strings and numbers
 * They are needed in the app to transform objects or strings
 */

/**
 * fancyfy
 * Feeling fancy? Not fancy enough! Use fancyfy to make it even more fancy!!
 * @param obj elm
 * @param string suffix
 *
 * @return string
 */
function fancyfy (elm, suffix) {
	const emptyLabel = 'no-label'
	if (typeof elm !== 'object') {
		return emptyLabel
	}
	const label = (elm.label)
		? elm.label.toString()
		: emptyLabel
	const total = (elm.total && elm.total.toString().match(/^\d+$/))
		? ' (' + normalizeNumber(elm.total) + ')'
		: ''
	suffix = (suffix)
		? ' ' + suffix
		: ''
	return label.charAt(0).toUpperCase() + label.substr(1) + suffix + total
}

/**
 * Filter to reformat numbers to add a dot when over a thousand
 * @param int number
 *
 * @return string number
 */
function normalizeNumber (n) {
	n = (n || 0).toString()
	while (true) {
		var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1.$2$3')
		if (n === n2) break
		n = n2
	}
	return n
}

export {
	fancyfy,
	normalizeNumber
}
