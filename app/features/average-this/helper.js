import Ember from 'ember';

export function averageThis(params/*, hash*/) {

  var reviewArray = params[0];
  // console.log(ratingArray);
  // console.log(ratingArray.get('length'));
  var newArray = [];

  var totalRating = 0;
  reviewArray.forEach(function(review) {
    //  totalRating += parseInt(review.get('rating'))
    console.log(review.rating);
  });

  // console.log(totalRating);

  // console.log(JSON.stringify(newArray));
  // console.log(ratingArray);
  // var sumRating = ratingArray.reduce(function(a, b) {
  //   return parseInt(a) + parseInt(b);
  // });
  // var averageRating = sumRating / ratingArray.length;
  // return averageRating;
}

export default Ember.Helper.helper(averageThis);
