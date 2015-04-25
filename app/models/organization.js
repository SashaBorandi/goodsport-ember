import DS from 'ember-data';
import Accountable from '../mixins/accountable';

export default DS.Model.extend(Accountable, {
  memberships: DS.hasMany('membership'),

  title: DS.attr('string')
});
