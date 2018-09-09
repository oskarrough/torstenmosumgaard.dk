import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { set, get } from '@ember/object';
import 'npm:lazysizes'
import 'npm:lazysizes/plugins/attrchange/ls.attrchange'
import fetch from 'fetch'

export default Route.extend({
	store: service(),

	model() {
		const url = `https://keramik.now.sh`
		const store = get(this, 'store')
		return fetch(url)
			.then(res => res.json())
			.then(res => store.serialize(res))
	},

	afterModel(model) {
		set(this, 'store.photos', model)
	}
})
