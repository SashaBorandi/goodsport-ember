import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('competition', { slug: params.competition_slug })
      .then(function(competitions) {
        return competitions.get('firstObject');
      });
  },

  serialize: function(model) {
    return { competition_slug: model.get('slug') };
  }
});
