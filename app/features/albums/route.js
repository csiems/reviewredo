import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return Ember.RSVP.hash({
      album: this.store.query('album', {orderBy: 'titleURL', equalTo: param.titleURL })
    });
  },
  

  // createReview(params) {
  //   console.log('in the album route');
  //
  //   var newReview = this.store.createRecord('review', params);
  //   var album = params.album;
  //   album.get('reviews').addObject(newReview);
  //   var user = params.user
  //   user.get('reviews').addObject(newReview)
  //   newReview.save().then(function(){
  //     user.save();
  //     return album.save();
  //   });
  //   this.transitionTo('albums')
  //
  // }


});
