import Ember from 'ember';

export default Ember.Controller.extend({
  types: ['tournament', 'league'],
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

  currentAccount: function() {
    return this.get('session.user.account');
  }.property(),

  accounts: function() {
    return [{
      username: this.get('currentAccount.username'),
      account: this.get('currentAccount.id')
    }];
  }.property(),

  address: function() {
    var address = 'This %@ will live at brackety.co/%@/%@';
    return address.fmt(
      this.get('model.type'),
      this.get('currentAccount.username'),
      this.get('model.slug')
    );
  }.property('model.slug', 'model.type'),

  actions: {
    editSlug: function(value) {
      var isDirty = value !== this.get('model.title').dasherize();
      this.set('isSlugDirty', isDirty);
    },

    create: function() {
      var model = this.get('model');

      this.store.find('account', this.get('account')).then(function(account) {
        model.set('account', account);

        model.save().then(function() {
          alert('Success!');
        }, function() {
          alert('Failed to create');
        });
      });
    }
  }
});
