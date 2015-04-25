import DS from 'ember-data';
import Sluggable from '../mixins/sluggable';

export default DS.Model.extend(Sluggable, {
  account: DS.belongsTo('account'),
  divisions: DS.hasMany('division'),

  title: DS.attr('string'),
  type: DS.attr('string')
});
