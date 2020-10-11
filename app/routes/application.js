import Ember from 'ember'
import 'npm:lazysizes'
import 'npm:lazysizes/plugins/attrchange/ls.attrchange'
import fetch from 'fetch'

const {get, set, inject} = Ember

export default Ember.Route.extend({
	store: inject.service(),

	model() {
		const url = 'https://torstenmosumgaard-api.herokuapp.com'
		const store = get(this, 'store')
		return fetch(url)
			.then(res => res.json())
			.then(res => store.serialize(res))
	},

	afterModel(model) {
		set(this, 'store.photos', model)
	}
})
