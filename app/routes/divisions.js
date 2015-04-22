import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var competitionSlug = this.modelFor('competitions').get('slug'),
      slug = competitionSlug + '.' + params.division_slug;

    return this.store.find('division', slug);
  }
});
