/**
 * API
 * This api handles all traffic between Automotivated.engine() and vroom
 *
 * https://github.com/Automotivated/engine
 * https://github.com/vuejs/vue-resource
 */

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

function getData (state, callback) {
	const http = Vue.http
	const api = state.app.api
	const requestData = parseRequestData(state)

	// get hits from api endpoint
	http.post(api.endpoint + api.path, requestData, {
		before (request) {
			// abort previous request, if exists
			try {
				http.previousRequest.abort()
			} catch (e) {
				// do nothing
			}
			// set previous request on Vue instance
			http.previousRequest = request
		}
	// parse response
	}).then((response) => {
		parseResponseData(response, callback)
	// handle error
	}, (response) => {
		callback({
			errors: [{
				code: 400,
				title: 'Endpoint not found',
				detail: 'We didn\'t get a response from the API'
			}]
		})
	})
}

function parseResponseData (response, callback) {
	let responseData
	if (typeof response.data !== 'object') {
		try {
			responseData = JSON.parse(response.data)
		} catch (e) {
			callback({
				errors: [{
					code: 500,
					title: 'No JSON response',
					detail: 'Invalid response from the API'
				}]
			})
		}
	} else {
		responseData = response.data
	}
	// send it back!
	callback(responseData)
}

function parseRequestData (state) {
	return {}
}

export default { getData }
