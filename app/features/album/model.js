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

  numberOfReviews: Ember.computed('reviews', function() {
    return this.get('reviews.length');
  }),

  averageRating: Ember.computed('reviews', function() {
    //album.reviews is only holding user and album keys, not review content.
    console.log(JSON.stringify(this.get('reviews').objectAt(0)));
  })

});
