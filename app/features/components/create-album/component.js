import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Component.extend({

  actions: {
    createAlbum() {
      var params = {
        title: get(this, 'title'),
        artist: get(this, 'artist'),
        label: get(this, 'label'),
        releaseYear: get(this, 'releaseYear'),
        imageURL: get(this, 'imageURL'),
        description: get(this, 'description')
      }

      this.sendAction('createAlbum', params);

      set(this, 'title', '');
      set(this, 'artist', '');
      set(this, 'label', '');
      set(this, 'releaseYear', '');
      set(this, 'imageURL', '');
      set(this, 'description', '');
    }
  }
});
