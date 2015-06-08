import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  account: DS.belongsTo('account')
});
