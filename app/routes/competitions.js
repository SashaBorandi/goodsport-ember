import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('competition', { slug: params.competition_slug })
      .then(function(competitions) {
        var competition = competitions.get('firstObject');
        if (!competition) {
          throw new Error('No competition with slug ' +
                          params.competition_slug + ' found');
        }

        return competition;
      });
  },

  serialize: function(model) {
    return { competition_slug: model.get('slug') };
  }
});
