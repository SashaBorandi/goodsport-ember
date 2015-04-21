import DS from 'ember-data';

var Account = DS.Model.extend({
  owner: DS.belongsTo('accountable', { polymorphic: true, async: true }),
  competitions: DS.hasMany('competition', { async: true }),

  username: DS.attr('string')
});

Account.reopenClass({
  FIXTURES: [
    {
      id: 1,
      owner: 1,
      ownerType: 'user',
      competitions: [1],
      username: 'hinshun'
    },
    {
      id: 2,
      owner: 1,
      ownerType: 'organization',
      competitions: [],
      username: 'utbc'
    }
  ]
});

export default Account;
