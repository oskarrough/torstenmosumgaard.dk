import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({
	tagName: 'figure',

	ratio: computed('img.{width,height}', {
		get() {
			const img = get(this, 'img')
			if (!img) {
				return ''
			}
			const {width, height} = img
			return height / width * 100
		}
	}),

	inlineStyles: computed('ratio', function() {
		return htmlSafe(`padding-bottom: ${get(this, 'ratio')}%`);
	}),

	click() {
		const onClick = get(this, 'onClick')
		if (!onClick) {
			return
		}
		onClick(get(this, 'img'))
	}
})
