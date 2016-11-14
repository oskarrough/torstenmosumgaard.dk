import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['Modal'],
  classNameBindings: ['model:is-open']
  // click(event) {
  //   // console.log(event);
  //   // close somehow?
  // }
});
