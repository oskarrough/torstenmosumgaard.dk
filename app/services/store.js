import Ember from 'ember';

export default Ember.Service.extend({
  // photos,
  serialize(data) {
    const serialized = data.resources.map(item => {
      return Ember.Object.create({
        id: item.public_id,
        width: item.width,
        height: item.height
      });
    });
    // console.log(serialized);
    // console.log(Ember.A(serialized));
    return Ember.A(serialized);
  }
});
