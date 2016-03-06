import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  actions: {
    signIn: function(){
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.sendAction('signIn', params);
    },
    signUp: function(){
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        password: this.get('password')
      };
      this.sendAction('signUp', params);
    }
  }
});
