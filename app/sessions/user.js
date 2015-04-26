import Ember from 'ember';
import Session from 'simple-auth/session';

export default Session.extend({
  user: function() {
    var userId = this.get('user_id');
    if (Ember.isPresent(userId)) {
      return this.container.lookup('store:main').find('user', userId);
    }
  }.property('user_id')
});
