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
      memberships: [],
      email: 'edgar@brackety.co',
      firstName: 'Edgar',
      lastName: 'Lee'
    }
  ]
});

export default User;
