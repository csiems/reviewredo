import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('albums', {path: '/:titleURL'});
  this.route('new-album');
  this.route('users');
});

export default Router;
