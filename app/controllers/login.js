import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      var _this = this,
        credentials = this.getProperties('identification', 'password');

      return this.get('session').authenticate(
        'simple-auth-authenticator:jwt',
         credentials
      ).then(function() {
        _this.store.find('user', _this.get('session.user_id'));
      }, function() {
        alert('Incorrect credentials');
      });
    }
  }
});
