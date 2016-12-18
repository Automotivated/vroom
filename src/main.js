/*
 * File: vroom
 * Desc: Creates Automotivated.vroom
 * Author: Ferry Kobus - ferry@webmonkeys.nl
 */

import Vue from 'vue'
import Vroom from './Vroom.vue'
import store from './store/store'
import { translations } from './translations/translation'

// Change to the opposite when going for production
if (process.env.NODE_ENV !== 'production') {
	Vue.config.devtools = true
	Vue.config.silent = false
}

;(function (window) {
	'use strict'

	function setup (instance, options) {
		// We're building the app!
		let lang = options.language || 'nl'
		lang = lang.toLowerCase()
		if (typeof translations[lang] !== 'undefined') {
			Vue.i18n.add(lang, translations[lang])
			Vue.i18n.set(lang)
		}
		/* eslint-disable no-new */
		new Vue({
			el: instance,
			store,
			render: h => h(Vroom),
			created () {
				this.$store.dispatch('app/updateOptions', options)
			}
		})
	}

	function factory () {
		var instances

		function init (options, element) {
			if (element) {
				if (!element.tagName) {
					throw new TypeError('Object is not a valid DOM element')
				}
				setup(element, options)
				instances.push(element)
			}
		}

		return function createVroom (target, options) {
			instances = []

			switch (typeof (target)) {
			case 'string':
				Array.prototype.forEach.call(
					document.querySelectorAll(target),
					init.bind(undefined, options)
				)
				break
			case 'object':
				init(options, target)
				break
			default:
				throw new TypeError('Unexpected data type (' + typeof (target) + ')')
			}

			return instances
		}
	}

	window.Automotivated = {
		vroom: (window.Automotivated !== undefined && window.Automotivated.vroom !== undefined)
			? window.Automotivated.vroom
			: factory()
	}
})(window || {})
