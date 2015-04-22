import Ember from 'ember';

export default Ember.Mixin.create({
  slug: function() {
    return this.get('id');
  }.property('id')
});
