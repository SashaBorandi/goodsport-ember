import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user', {
      account: this.store.createRecord('account')
    });
  }
});
