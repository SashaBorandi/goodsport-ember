import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  slug: DS.attr('string')
});
