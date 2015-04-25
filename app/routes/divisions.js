import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('division', { slug: params.division_slug })
      .then(function(divisions) {
        var division = divisions.get('firstObject');
        if (!division) {
          throw new Error('No division with slug ' +
                          params.division_slug + ' found');
        }

        return division;
      });
  },

  serialize: function(model) {
    return { division_slug: model.get('slug') };
  }
});
