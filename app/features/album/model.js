import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  artist: DS.attr(),
  label: DS.attr(),
  releaseYear: DS.attr(),
  imageURL: DS.attr(),
  description: DS.attr(),
  titleURL: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),
  dateAdded: DS.attr(),
  averageRating: Ember.computed('reviews.@each.rating', function() {
    return this.get('reviews').reduce(function(sum, review) {
      return sum += review.get('rating');
    }, 0) / this.get('reviews').get('length');
  })

});
