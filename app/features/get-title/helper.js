import Ember from 'ember';

export function getTitle(params) {
  var method = params[0];
  return "Sign " + method.replace(/(sign)/, '');
}

export default Ember.Helper.helper(getTitle);
