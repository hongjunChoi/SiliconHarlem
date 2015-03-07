var mongo = require('./mongo');
var courseDb = require('./course');

module.exports = {
  createReview: function (reviewData, callback) {
    courseDb.findCourse(reviewData.courseId, function (err, course) {
      if (err) {
        console.log(err);
      }
      var newReviewData = {text: reviewData.text};
      var review = new mongo.Review(newReviewData);
      course.reviews.push(review);
      course.save(function (err) {
        if (err) {
          console.log(err);
        }
        callback(err);
      });
    });
  },

  deleteReview: function (reviewData, callback) {
    courseDb.findCourse(reviewData.courseId, function (err, course) {
      if (err) {
        console.log(err);
      }
      course.reviews.id(reviewData.reviewId).remove();
      course.save(function (err) {
        callback(err);
      });
    });
  },

  updateReview: function (reviewData, callback) {
    courseDb.findCourse(reviewData.courseId, function (err, course) {
      if (err) {
        console.log(err);
      }
      course.reviews.id(reviewData.reviewId).text = reviewData.text;
      course.save(function (err) {
        callback(err);
      });
    });
  }
};
