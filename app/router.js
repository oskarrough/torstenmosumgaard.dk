import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
})

Router.map(function() {
	this.route('photo', {path: 'p/:photo_id'})
})

export default Router
