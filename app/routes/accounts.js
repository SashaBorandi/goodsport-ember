import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('account', { username: params.account_username })
      .then(function(accounts) {
        return accounts.get('firstObject');
      });
  },

  serialize: function(model) {
    return { account_username: model.get('username') };
  }
});
