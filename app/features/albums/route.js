import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.query('album', {orderBy: 'titleURL', equalTo: param.titleURL });
  },

  createReview(params) {
    console.log('in the route');
    Object.keys(params).forEach(function(key){
      if(params[key] === undefined) {
        alert("Please fill in all form fields");
        this.transitionTo('albums');
      }
    });
    var newReview = this.store.createRecord('review', params);
    var album = params.album;
    album.get('reviews').addObject(newReview);
    var user = params.user
    user.get('reviews').addObject(newReview)
    newReview.save().then(function(){
      user.save();
      return album.save();
    });
    this.transitionTo('albums')

  }
});
