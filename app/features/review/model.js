import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  album: DS.belongsTo('album', {async: true})
});
