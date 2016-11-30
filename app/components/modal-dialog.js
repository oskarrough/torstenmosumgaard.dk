import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['Modal'],
  classNameBindings: ['model:is-open'],

  actions: {
    close() {
      this.get('on-close')();
    }
  }
});
