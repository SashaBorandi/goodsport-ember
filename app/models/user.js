import DS from 'ember-data';
import Accountable from '../mixins/accountable';

var User = DS.Model.extend(Accountable, {
  memberships: DS.hasMany('organization'),

  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      email: 'edgar@brackety.co'
    }
  ]
});

export default User;
