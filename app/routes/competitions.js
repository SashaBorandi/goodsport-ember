import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var username = this.modelFor('accounts').get('username'),
      slug = username + '.' + params.competition_slug;

    return this.store.find('competition', slug);
  }
});
