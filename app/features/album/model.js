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
  averageRating: Ember.computed('reviews', function() {
    var self = this;
      var albumReviews = self.get('reviews').then(function(albumReviews) {
        var ratingArray = albumReviews.mapBy('rating');
        var sumRating = ratingArray.reduce(function(a, b) {
          return parseInt(a) + parseInt(b);
        });
        var averageRating = sumRating / ratingArray.length;
        console.log(averageRating);
        return averageRating;
      });
  }).property('reviews'),

});
