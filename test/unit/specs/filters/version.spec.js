/**
 * Tests all functions in the version filter
 */

import info from '../../../../package.json'

import * as versionFilter from 'src/filters/version'

// all tests for the filters library
describe('filters', () => {
	it('should return a copy mark of this year', () => {
		var year = new Date().getFullYear()
		expect(versionFilter.getCopy()).to.equal('&copy;&nbsp;' + year)
	})

	it('should return binary version', () => {
		expect(versionFilter.getBinaryVersion('0.0.1')).to.equal('v00110000.00110000.00110001')
		expect(versionFilter.getBinaryVersion('0.1.0-alpha.1')).to.equal('v00110000.00110001.00110000')
	})

	it('should return current version', () => {
		expect(versionFilter.getVersion()).to.equal('v' + info.version)
		expect(versionFilter.getVersion('1.x.0-rc.1')).to.equal('v1.x.0-rc.1')
	})
})
