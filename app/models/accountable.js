import DS from 'ember-data';

export default DS.Model.extend({
  account: DS.belongsTo('account'),

  username: function() {
    return this.get('account.username');
  }.property('account.username')
});
