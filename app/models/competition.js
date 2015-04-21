import DS from 'ember-data';

var Competition = DS.Model.extend({
  account: DS.belongsTo('account'),
  divisions: DS.hasMany('division'),

  slug: DS.attr('string')
});

Competition.reopenClass({
  FIXTURES: [
    {
      id: 1,
      account: 1,
      slug: 'hello-world'
    }
  ]
});

export default Competition;
