import Ember from 'ember';

const {Component, computed, get} = Ember;

export default Component.extend({
  tagName: 'figure',

  ratioStyles: computed('img.{width,height}', {
    get() {
      const img = get(this, 'img');
      if (!img) {
        return '';
      }
      const {width, height} = img;
      const ratio = (height / width) * 100;
      return Ember.String.htmlSafe(`padding-bottom: ${ratio}%`);
    }
  }),

  click() {
    const onClick = get(this, 'onClick');
    if (!onClick) {
      return;
    }
    onClick(get(this, 'img'));
  }
});
