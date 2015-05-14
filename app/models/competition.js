import DS from 'ember-data';
import Sluggable from '../mixins/sluggable';

export default DS.Model.extend(Sluggable, {
  account: DS.belongsTo('account'),
  events: DS.hasMany('event'),

  title: DS.attr('string', { defaultValue: '' }),
  type: DS.attr('string')
});
