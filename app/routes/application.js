import Ember from 'ember'
import 'npm:lazysizes'
import 'npm:lazysizes/plugins/attrchange/ls.attrchange'

const {get, set, inject} = Ember

export default Ember.Route.extend({
	ajax: inject.service(),
	store: inject.service(),

	model() {
		const url = `https://keramik.now.sh`
		const store = get(this, 'store')
		return get(this, 'ajax').request(url).then(res => store.serialize(res))
	},

	afterModel(model) {
		set(this, 'store.photos', model)
	}
})
