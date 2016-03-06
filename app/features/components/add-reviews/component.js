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
        rating: this.get('currentRating'),
        title: this.get('title'),
        content: this.get('content'),
        user: this.get('user'),
        album: this.get('album')
      };

      console.log(JSON.stringify(params.rating));
      console.log(JSON.stringify(params.title));
      console.log(JSON.stringify(params.content));
      console.log(JSON.stringify(params.user));
      console.log(JSON.stringify(params.album));
      this.sendAction('createReview', params);
    }
  }

});
