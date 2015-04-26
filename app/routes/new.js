import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session.user').then(function(user) {
      return user.get('account');
    });
  },

  model: function() {
    return this.store.createRecord('competition');
  }
});
