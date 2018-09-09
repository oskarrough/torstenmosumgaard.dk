import { A } from '@ember/array';
import EmberObject from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
	// photos,
	serialize(data) {
		const serialized = data.resources.map(item => {
			return EmberObject.create({
				id: item.public_id,
				width: item.width,
				height: item.height
			});
		})
		// console.log(serialized);
		// console.log(Ember.A(serialized));
		return A(serialized);
	}
})
