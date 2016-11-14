import Ember from 'ember';

const {get, set, inject} = Ember;

export default Ember.Route.extend({
  ajax: inject.service(),
  store: inject.service(),

  model() {
    const url = `https://keramik.now.sh`;
    const store = get(this, 'store');
    return get(this, 'ajax').request(url)
      .then(res => store.serialize(res));
  },
  setupController(controller, model) {
    const sorted = model.sort(() => 0.5 - Math.random());
    const photos = sorted;
    set(controller, 'photos', photos);
    set(this, 'store.photos', photos);
  }
});

