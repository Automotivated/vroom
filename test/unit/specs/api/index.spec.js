/**
 * Test the API
 * Covers all branches, statements and response possibilities
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import api from 'src/api/index'

const errorResponse = {
	errors: [{
		code: 400,
		title: 'Endpoint not found',
		detail: 'We didn\'t get a response from the API'
	}]
}
const config = {
	app: {
		api: {
			endpoint: 'http://localhost',
			path: '/test'
		}
	}
}
const defaultResponse = {
	data: {
		message: 'Hello!'
	}
}
describe('api', () => {
	let promiseCall

	beforeEach(() => {
		promiseCall = sinon.stub(Vue.http, 'post').returnsPromise()
	})
	afterEach(() => {
		sinon.restore(Vue.http.post)
	})

	it('should contain proper methods', () => {
		expect(typeof api.getData).to.be.equal('function')
	})
	it('getData should return valid data', done => {
		const callback = sinon.spy()
		promiseCall.resolves(defaultResponse)
		api.getData(config, callback)
		expect(callback).to.have.been.calledWith({
			message: 'Hello!'
		})
		done()
	})
	it('getData should return an error', done => {
		const callback = sinon.spy()
		promiseCall.rejects(errorResponse)
		api.getData(config, callback)
		expect(callback).to.have.been.calledWith(errorResponse)
		done()
	})
	it('getData should return an error when the response is not json', done => {
		const callback = sinon.spy()
		promiseCall.resolves({
			data: 'empty'
		})
		api.getData(config, callback)
		expect(callback).to.have.been.calledWith({
			errors: [{
				code: 500,
				title: 'No JSON response',
				detail: 'Invalid response from the API'
			}]
		})
		done()
	})
	it('getData should return valid data from a string', done => {
		const callback = sinon.spy()
		const defaultResponseString = JSON.stringify({
			message: 'Hello!'
		})
		promiseCall.resolves({
			data: defaultResponseString
		})
		api.getData(config, callback)
		expect(callback).to.have.been.calledWith({
			message: 'Hello!'
		})
		done()
	})
})

/**
 * Special calls to test the abort
 */
describe('api debounce', () => {
	beforeEach(() => {
		Vue.http.interceptors.unshift((request, next) => {
			if (request.url === 'http://localhost/test') {
				next(request.respondWith())
			} else if (request.url === 'http://localhost/cancelled') {
				// we shouldn't get here, but that doesn't work like expected, so just don't call next
			} else {
				next()
			}
		})
	})
	afterEach(() => {
		Vue.http.interceptors.shift()
	})
	it('it should cancel previous requests', done => {
		const callbackOne = sinon.spy()
		const callbackTwo = sinon.spy()
		api.getData({
			app: {
				api: {
					endpoint: 'http://localhost',
					path: '/cancelled'
				}
			}
		}, callbackOne)
		api.getData(config, callbackTwo)
		setTimeout(() => {
			expect(callbackOne).to.not.have.been.called
			expect(callbackTwo).to.have.been.calledWith(errorResponse)
			done()
		}, 0)
	})
})
