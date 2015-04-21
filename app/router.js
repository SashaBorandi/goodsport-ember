import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('accounts', { path: '/:account_username' }, function() {
    this.resource('competitions', { path: '/:competition_slug' }, function() {
      this.resource('divisions', { path: '/:division_slug' },  function() {
        this.resource('matches', function() {
        });
      });
    });

    // Organization Routes
    this.route('member');
  });
});

export default Router;
