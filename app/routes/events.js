import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('event', { slug: params.event_slug })
      .then(function(events) {
        var event = events.get('firstObject');
        if (!event) {
          throw new Error('No event with slug ' +
                          params.event_slug + ' found');
        }

        return event;
      });
  },

  serialize: function(model) {
    return { event_slug: model.get('slug') };
  }
});
