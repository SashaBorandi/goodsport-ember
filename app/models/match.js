import DS from 'ember-data';

export default DS.Model.extend({
  division: DS.belongsTo('division')
});
