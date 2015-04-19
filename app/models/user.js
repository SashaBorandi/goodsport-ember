import DS from 'ember-data';
import Accountable from '../models/accountable';

var User = Accountable.extend({
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
