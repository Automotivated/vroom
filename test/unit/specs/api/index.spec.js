/**
 * Test the API
 *
 * Stub the response interceptor
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import api from 'src/api/index'

// all tests for the filters library
describe('api', () => {
	const vm = new Vue({
		template: '<div id="main"><p>Just some useless data</p></div>',
		methods: {
			getData (state, callback) {
				api.getData(state, callback)
			}
		}
	}).$mount()
	const errorResponse = {
		errors: [{
			code: 400,
			title: 'Endpoint not found',
			detail: 'We didn\'t get a response from the API'
		}]
	}
	beforeEach(() => {
		Vue.http.interceptors.unshift((request, next) => {
			if (request.url === 'http://localhost/error-request') {
				next(request.respondWith(errorResponse))
			} else if (request.url === 'http://localhost/cancel-request') {
				// Vue.http.previousRequest = {
				// 	abort: function () { }
				// }
				next(request.respondWith(errorResponse))
			} else {
				next()
			}
		})
		// console.log(Vue.http.interceptors)
	})
	afterEach(() => {
		Vue.http.interceptors.shift()
	})
	it('should return an error when no connection', done => {
		var callback = sinon.spy()
		vm.getData({
			app: {
				api: {
					endpoint: 'http://localhost',
					path: '/error-request'
				}
			}
		}, callback)
		setTimeout(() => {
			expect(callback).to.have.been.calledWith(errorResponse)
			done()
		}, 0)
	})
	// it('should cancel the first request', done => {
	// 	var callback = sinon.spy()
	// 	vm.getData({
	// 		app: {
	// 			api: {
	// 				endpoint: 'http://localhost',
	// 				path: '/cancel-request'
	// 			}
	// 		}
	// 	}, callback)
	// 	setTimeout(() => {
	// 		expect(callback).to.have.been.calledWith(errorResponse)
	// 		done()
	// 	}, 0)
	// })
})
