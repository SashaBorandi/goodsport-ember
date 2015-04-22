import DS from 'ember-data';

var Account = DS.Model.extend({
  owner: DS.belongsTo('accountable', { polymorphic: true, async: true }),
  competitions: DS.hasMany('competition', { async: true }),

  username: function() {
    return this.get('id');
  }.property('id')
});

Account.reopenClass({
  FIXTURES: [
    {
      id: 'hinshun',
      owner: 1,
      ownerType: 'user',
      competitions: ['hinshun.championship']
    },
    {
      id: 'utbc',
      owner: 1,
      ownerType: 'organization',
      competitions: []
    }
  ]
});

export default Account;
