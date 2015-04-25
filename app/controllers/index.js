import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      var _this = this;

      this.get('model').save().then(function() {
        var credentials = {
          identification: _this.get('model.email'),
          password: _this.get('model.password')
        };
        _this.get('session').authenticate('simple-auth-authenticator:jwt', credentials);
      }, function() {
        alert('Failed to create');
      });
    }
  }
});
