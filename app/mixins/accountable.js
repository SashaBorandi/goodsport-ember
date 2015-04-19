import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  account: DS.belongsTo('account'),

  username: function() {
    return this.get('account.username');
  }.property('account.username')
});
