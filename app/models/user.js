import DS from 'ember-data';
import Accountable from '../mixins/accountable';

export default DS.Model.extend(Accountable, {
  memberships: DS.hasMany('organization'),

  email: DS.attr('string'),
  password: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
