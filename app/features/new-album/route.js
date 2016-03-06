import Ember from 'ember';
import cleanURI from '../clean/util';
import getOrCreateUser from '../get-or-create-user/util';

const { get, set } = Ember;

export default Ember.Route.extend({
  model() {

  },

  actions: {
    createAlbum(params) {
      let user = null;
      let titleURL = cleanURI(params.title);
      let uid = get(this, 'session.uid');
      let dateAdded = new Date();
      let album = this.store.createRecord('album', {
        title: params.title,
        artist: params.artist,
        label: params.label,
        releaseYear: params.releaseYear,
        imageURL: params.imageURL,
        description: params.description,
        titleURL: titleURL,
        dateAdded: dateAdded
      });


      user = getOrCreateUser(uid, get(this, 'session.currentUser.username'),
                             get(this, 'session.currentUser.profileImageURL'),
                             this.store);

      user.then((userData) => {
        userData.get('albums').addObject(album);
        album.save().then(() => {
          return userData.save();
        });
      });

      set(this, 'title', '');
      set(this, 'artist', '');
      set(this, 'label', '');
      set(this, 'releaseYear', '');
      set(this, 'imageURL', '');
      set(this, 'description', '');
      this.transitionTo('index');

    }
  }
});
