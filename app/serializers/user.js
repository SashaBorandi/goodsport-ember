import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  nestedAttributes: ['account'],

  keyForAttribute: function (attr) {
    var suffix = '';
    if (this.get('nestedAttributes').contains(attr)) {
      suffix = '_attributes';
    }
    return this._super(attr) + suffix;
  },

  attrs: {
    account: { embedded: 'always' }
  }
});
