var express = require('express');
var reviewsDb = require('../db/review');
var coursesDb = require('../db/course');

var router = express.Router();

/* GET all reviews */
router.get('/courses/:courseId/reviews/', function (req, res) {
  // TODO: Respond with an array of all the course's reviews
  var courseId = req.params.courseId;
  coursesDb.findCourse(courseId, function (err, course) {
    if (err) {
      res.send(err);
    }
    res.json(course.reviews);
  });
});

/* POST new review */
router.post('/courses/:courseId/reviews/', function (req, res) {
  // TODO: Save the review and respond with the error (which can be null)
  var id = req.params.courseId;
  var textOfReview = req.body.text;
  var output = {
    courseId: id,
    text: textOfReview
  };
  reviewsDb.createReview(output, function (err) {
    res.json(err);
  });
});

/* PUT review */
router.put('/courses/:courseId/reviews/:reviewId', function (req, res) {
  // TODO: Update the review and respond with the error
  var idOfCourse = req.params.courseId;
  var idOfReview = req.params.reviewId;
  var textOfReview = req.body.text;
  var output = {
    courseId: idOfCourse,
    reviewId: idOfReview,
    text: textOfReview
  };
  reviewsDb.updateReview(output, function (err) {
    res.json(err);
  });
});

/* DELETE review */
router.delete('/courses/:courseId/reviews/:reviewId', function (req, res) {
  // TODO: Delete the review and respond with the error
  // object needs to have courseId AND reviewID
  var idOfCourse = req.params.courseId;
  var idOfReview = req.params.reviewId;
  var output = {
    courseId: idOfCourse,
    reviewId: idOfReview
  };
  reviewsDb.deleteReview(output, function (err) {
    res.json(err);
  });
});

module.exports = router;
