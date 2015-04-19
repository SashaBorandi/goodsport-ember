import DS from 'ember-data';

var Account = DS.Model.extend({
  username: DS.attr('string'),
  owner: DS.belongsTo('accountable', { polymorphic: true, async: true })
});

Account.reopenClass({
  FIXTURES: [
    {
      id: 1,
      username: 'hinshun',
      owner: 1,
      ownerType: 'user'
    },
    {
      id: 2,
      username: 'utbc',
      owner: 1,
      ownerType: 'organization'
    }
  ]
});

export default Account;
