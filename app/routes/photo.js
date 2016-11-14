import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const photos = this.modelFor('application');
    return photos.filterBy('id', params.photo_id)[0];
  }
});
