import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr(),
  username: DS.attr(),
  avatar: DS.attr(),
  albums: DS.hasMany('album', {async: true}),
  reviews: DS.hasMany('review', {async: true})
});
