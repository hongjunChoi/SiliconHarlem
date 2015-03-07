var express = require('express');
var coursesDb = require('../db/course');

var router = express.Router();

/* GET all courses */
router.get('/courses', function (req, res) {
  // TODO: Get data for all courses and respond to the GET request with this data.
  coursesDb.findCourses(function (err, courses) {
    res.send(courses);
    if (err) {
      console.log(err);
    }
  });
});

/* GET course show page. */
router.get('/courses/:id', function (req, res) {
  // TODO: Render the index page
  res.render('index');
});

module.exports = router;
