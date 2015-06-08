import Ember from 'ember';

export default Ember.Controller.extend({
  formats: [
    { format: 'round_robin', name: 'Round Robin'},
    { format: 'single_elimination', name: 'Single Elimination'}
  ],
  isSlugDirty: false,
  title: '',

  onTitleChange: function() {
    if (!this.get('isSlugDirty')) {
      var leadingSpace = /^\s*/,
        trailingSpace = /\s*$/,
        greedyBad = /[^\w\s]/g,
        greedySpace = /\s+/g;

      var slug = this.get('model.title')
        .replace(leadingSpace, '').replace(trailingSpace, '')
        .replace(greedyBad, '').replace(greedySpace, ' ')
        .dasherize();

      this.set('model.slug', slug);
    }
  }.observes('model.title'),

  actions: {
    editSlug: function(value) {
      var isDirty = value !== this.get('model.title').dasherize();
      this.set('isSlugDirty', isDirty);
    },

    create: function() {
      var _this = this,
        event = this.get('model');

      event.save().then(function(event) {
        _this.transitionToRoute('event', account, event);
      }, function() {
        alert('Failed to create');
      });
    }
  }
});
