import Ember from 'ember';

export function averageThis(params/*, hash*/) {

  var ratingArray = params[0];
  console.log(ratingArray.get('length'));
  var newArray = [];

  ratingArray.forEach(function(rating) {
    console.log(rating.get('_internalModel'));
  })

  console.log(JSON.stringify(newArray));
  // console.log(ratingArray);
  // var sumRating = ratingArray.reduce(function(a, b) {
  //   return parseInt(a) + parseInt(b);
  // });
  // var averageRating = sumRating / ratingArray.length;
  // return averageRating;
}

export default Ember.Helper.helper(averageThis);
