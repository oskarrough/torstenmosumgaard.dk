import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		const photos = this.modelFor('application')
		return photos.filterBy('id', params.photo_id)[0]
	}
})
