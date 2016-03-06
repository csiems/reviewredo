import Ember from 'ember';
import config from '../../config/environment';

const {get, set} = Ember;

export default Ember.Route.extend({
  firebase: null,

  beforeModel(){
    return get(this,'session').fetch().catch(function(){});
  },
  model() {
    return Ember.RSVP.hash({
      albums: this.store.findAll('album'),
      user: this.store.findRecord('user', this.get("session").content.uid)
    });
  },

  afterModel(model) {
    return this.get('session').get('content').user = model;
  },

  actions:{
    signIn(provider) {
      get(this, 'session').open("firebase", { provider: provider}).then(function(data) {
        console.log(data.currentUser);
        console.log(user);
      });
    },

    signOut() {
      get(this, 'session').close();
    },

    signUp(params) {
      set(this, 'firebase', new Firebase(config.firebase));
      var self = this;
      get(this, 'firebase').createUser({
        email: params.email,
        password: params.password
      }, function(error, userData) {
        if (error) {
          console.log('Error creating user:', error);
        } else {
          console.log('Successfully created user account with uid:', userData.uid);
          self.get('firebase').child('users').child(userData.uid).set({
            firstName: params.firstName,
            lastName: params.lastName,
            email: params.email,
            uid: userData.uid
          });
        }
      });
    },

    signIn(params) {
      set(this, 'firebase', new Firebase(config.firebase));
      var self = this;
      get(this, 'firebase').authWithPassword({
        email: params.email,
        password: params.password
      }, function(error, authData) {
        if (error) {
          console.log('Login Failed!', error);
        } else {
          console.log('Authenticated Successfully with payload: ', authData);
          self.refresh();
        }
      });
    }
  }
});
