import Component from '@ember/component';

export default Component.extend({
	tagName: 'button',
	classNames: ['ThemeSwitcher'],
	click() {
		document.body.classList.toggle('theme-dark')
	}
});
