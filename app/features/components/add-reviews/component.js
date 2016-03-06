import Ember from 'ember';

const {get, set} = Ember;

export default Ember.Component.extend({
  currentRating: 0,

  actions: {
    updateRating(params) {
      var clickedRating = params.rating;
      set(this, 'currentRating', clickedRating);
    },

    createReview() {
      console.log('in the component');
      var params = {
        rating: this.get('currentRating'),
        title: this.get('title'),
        content: this.get('content'),
        user: this.get('session.currentUser'),
        album: this.get('album')
      }
      this.sendAction('createReview', params);
    }
  }

});
