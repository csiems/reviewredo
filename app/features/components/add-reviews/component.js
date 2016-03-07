import Ember from 'ember';
import getOrCreateUser from '../../get-or-create-user/util';

const {set, get} = Ember;

export default Ember.Component.extend({
  currentRating: 0,

  actions: {
    updateRating(params) {
      var clickedRating = params.rating;
      set(this, 'currentRating', clickedRating);
    },

    createReview() {
      var params = {
        rating: get(this, 'currentRating'),
        title: get(this, 'title'),
        content: get(this, 'content'),
        user: get(this, 'user'),
        album: get(this, 'album')
      };

      console.log("Rating is: " + JSON.stringify(params.rating));
      console.log("Title is: " + JSON.stringify(params.title));
      console.log("Content is: " + JSON.stringify(params.content));
      console.log("User is: " + JSON.stringify(params.user));
      console.log("Album is: " + JSON.stringify(params.album));
      this.sendAction('createReview', params);
    }
  }

});
