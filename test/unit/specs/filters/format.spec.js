/**
 * Tests all functions in the format filter
 */

import * as formatFilter from 'src/filters/format'

// all tests for the filters library
describe('format', () => {
	// fancyfy filter
	it('should create a fancy label of an option', () => {
		expect(formatFilter.fancyfy({
			label: 'renault',
			total: 123
		})).to.equal('Renault (123)')
		expect(formatFilter.fancyfy({
			label: '20',
			total: 14
		}, '% bijtelling')).to.equal('20 % bijtelling (14)')
		expect(formatFilter.fancyfy('test')).to.equal('Test (0)')
		expect(formatFilter.fancyfy('test', 'test')).to.equal('Test test (0)')
	})
	it('should return a nice formatted number', () => {
		expect(formatFilter.normalizeNumber(10000)).to.equal('10.000')
		expect(formatFilter.normalizeNumber(100500)).to.equal('100.500')
		expect(formatFilter.normalizeNumber(12345678)).to.equal('12.345.678')
		expect(formatFilter.normalizeNumber()).to.equal('0')
	})
})
