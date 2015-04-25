import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      this.get('model').save().then(function() {
        alert('Successful create!');
      }, function() {
        alert('Failed to create');
      });
    }
  }
});
