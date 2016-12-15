import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import { translations } from 'src/translations/translation'

/* global chai */
chai.use(require('chai-things'))

describe('Translation files', () => {
	it('should return an array', () => {
		expect(translations).to.be.an('object')
	})
	it('should only contain lowercase, dots and underscores', () => {
		Object.keys(translations['nl']).should.all.match(/^[a-z0-9_.]+$/)
	})
})

describe('i18n should translate', () => {
	let vm = null

	beforeEach(() => {
		const store = new Vuex.Store({
			modules: {
				i18n: vuexI18n.store
			}
		})
		Vue.use(vuexI18n.plugin, store)
		Vue.i18n.add('nl', translations['nl'])
		Vue.i18n.add('en', translations['en'])
		vm = new Vue({
			store,
			template: '<div id="main"><p>{{ $t("filters.masterdata.body.label") }}</div>'
		}).$mount()
	})

	it('should translate to dutch', done => {
		Vue.i18n.set('nl')
		Vue.nextTick(() => {
			expect(vm.$el.querySelector('div p').textContent).to.equal('Carrosserie')
			done()
		})
	})
	it('should translate to english', done => {
		Vue.i18n.set('en')
		Vue.nextTick(() => {
			expect(vm.$el.querySelector('div p').textContent).to.equal('Body')
			done()
		})
	})
})
