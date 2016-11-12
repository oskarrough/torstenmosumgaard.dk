import Ember from 'ember';

const {get, inject} = Ember;

export default Ember.Route.extend({
  ajax: inject.service(),
  model() {
    const url = `https://keramik.now.sh`;
    return get(this, 'ajax').request(url)
      .then(res => res.resources);
  },
  setupController(controller, model) {
    const sortedImages = model.sort(() => 0.5 - Math.random());
    controller.set('images', sortedImages);
  }
});
