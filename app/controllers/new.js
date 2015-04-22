import Ember from 'ember';

export default Ember.Controller.extend({
  types: ['tournament', 'league'],
  isSlugDirty: false,
  title: '',

  onTitleChange: function() {
    if (!this.get('isSlugDirty')) {
      this.set('slug', this.get('title').dasherize());
    }
  }.observes('title'),

  address: function() {
    var address = 'This %@ will live at brackety.co/%@/%@';
    return address.fmt(this.get('type'), this.get('account'), this.get('slug'));
  }.property('account', 'slug', 'type'),

  actions: {
    editSlug: function(value) {
      var isDirty = value !== this.get('title').dasherize();
      this.set('isSlugDirty', isDirty);
    }
  }
});
