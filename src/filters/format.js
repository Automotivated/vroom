/**
 * format
 * Filters that format strings and numbers
 * They are needed in the app to transform objects or strings
 */

// import scripts
import Vue from 'vue'

/**
 * fancyfy
 * Feeling fancy? Not fancy enough! Use fancyfy to make it even more fancy!!
 * @param obj elm
 * @param string suffix
 *
 * @return string
 */
function fancyfy (elm, suffix) {
	const emptyLabel = 'No-label'
	const label = (elm.label)
		? elm.label.toString()
		: emptyLabel
	const total = (elm.total && elm.total.toString().match(/^\d+$/))
		? ' (' + normalizeNumber(elm.total) + ')'
		: ' (0)'
	suffix = (suffix)
		? ' ' + suffix
		: ''
	return label.charAt(0).toUpperCase() + label.substr(1) + suffix + total
}

/**
 *
 */
function toLocale (locale) {
	if (locale && locale === 'currency') {
		switch (Vue.i18n.translate('filters.global.currency')) {
		case 'USD':
			return '&#36;'
		case 'EUR':
		default:
			return '&euro;'
		}
	}
	return null
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
	normalizeNumber,
	toLocale
}
