import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('account', { username: params.account_username })
      .then(function(accounts) {
        var account = accounts.get('firstObject');
        if (!account) {
          throw new Error('No account with slug ' +
                          params.account_username + ' found');
        }

        return account;
      });
  },

  serialize: function(model) {
    return { account_username: model.get('username') };
  }
});
