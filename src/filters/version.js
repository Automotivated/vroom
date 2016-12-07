/**
 * version
 * Filters that format the copy and version ala vroom style ;)
 */

import info from '../../package.json'

/**
 * getCopy
 * Returns a formatted (c) witht the current date
 */
function getCopy () {
	const date = new Date()
	return '&copy;&nbsp;' + date.getFullYear()
}

/**
 * getBinaryVersion
 * returns the binary version of x.x.x
 */
function getBinaryVersion (version) {
	const padding = '00000000'
	version = (typeof version !== 'undefined')
		? version
		: info.version
	version = version.match(/\d{1,3}\.\d{1,3}\.\d{1,3}/g)[0].replace(/\./g, '')
	const output = []
	for (let i = 0, l = version.length; i < l; i++) {
		var compact = version[i].charCodeAt(0).toString(2)
		var padded = padding.substring(0, padding.length - compact.length) + compact
		output.push(padded)
	}
	return 'v' + output.join('.')
}

/**
 * getVersion
 * Returns the regular version
 */
function getVersion (version) {
	version = version || info.version
	return 'v' + version
}

export {
	getCopy,
	getBinaryVersion,
	getVersion
}
