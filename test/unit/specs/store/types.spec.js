import 'babel-polyfill'
import * as types from 'src/store/types'

describe('types', () => {
	it('should get valid types', () => {
		expect(types.LOADING).to.equal('LOADING')
		expect(types.ADD_DELAY).to.equal('ADD_DELAY')
		expect(types.UPDATE_OPTIONS).to.equal('UPDATE_OPTIONS')
		expect(types.UPDATE_OVERVIEW_RENDERING).to.equal('UPDATE_OVERVIEW_RENDERING')
		expect(types.UPDATE_OVERVIEW_COUNT).to.equal('UPDATE_OVERVIEW_COUNT')
	})
})
