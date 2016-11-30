import Ember from 'ember';

const {Component, computed, get} = Ember;

export default Component.extend({
  tagName: 'figure',

  ratio: computed('img.{width,height}', {
    get() {
      const img = get(this, 'img');
      if (!img) {
        return '';
      }
      const {width, height} = img;
      return (height / width) * 100;
    }
  }),

  inlineStyles: computed('ratio', function () {
    return Ember.String.htmlSafe(`padding-bottom: ${get(this, 'ratio')}%`);
  }),

  click() {
    const onClick = get(this, 'onClick');
    if (!onClick) {
      return;
    }
    onClick(get(this, 'img'));
  }
});
