import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(controller, model) {
    return this.render('account/user', model.get('ownerType'));
  }
});
