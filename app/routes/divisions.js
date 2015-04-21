import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('division', { slug: params.division_slug })
      .then(function(divisions) {
        return divisions.get('firstObject');
      });
  },

  serialize: function(model) {
    return { division_slug: model.get('slug') };
  }
});
