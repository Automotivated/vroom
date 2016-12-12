import 'babel-polyfill'
import * as types from 'src/store/types'

/* global chai */
chai.use(require('chai-things'))

describe('Store types', () => {
	it('should return an array of strings', () => {
		expect(types).to.be.an('object')
		expect(types[Object.keys(types)[0]]).to.be.an('string')
	})
	it('should only contain capitals and underscores', () => {
		Object.keys(types).should.all.match(/^[A-Z_]+$/)
		Object.values(types).should.all.match(/^[A-Z_]+$/)
	})
})
