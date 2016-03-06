import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {

    return this.store.query('album', {orderBy: 'titleURL', equalTo: param.titleURL });
  },

  createReview(params) {
    var newReview = this.store.createRecord('review', params);
    var album = params.album
    var user = params.user


    album.get('reviews').addObject(newReview);
    user.get('reviews').addObject(newReview)
    newReview.save().then(function(){
      user.save();
      return album.save();
    });
    this.transitionTo('albums')
  }
});
