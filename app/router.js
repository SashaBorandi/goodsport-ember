import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('search');
  this.route('new');
  this.route('settings');

  this.resource('account', { path: '/:account_username' }, function() {
    this.resource('competition', { path: '/:competition_slug' }, function() {
      this.route('new');
      this.resource('events', function() {
        this.route('show', { path: '/:event_slug' }, function() {
          this.resource('matches', function() {
            this.route('show', { path: '/:match_id' });
          });
        });
      });
    });

    this.route('members');
  });
});

export default Router;
