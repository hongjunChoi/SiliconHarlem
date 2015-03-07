var mongo = require('./mongo');

module.exports = {
  findCourses: function (callback) {
    mongo.Course.find(function (err, courses) {
      callback(err, courses);
    });
  },

  findCourse: function (_id, callback) {
    mongo.Course.findById(_id, function (err, course) {
      callback(err, course);
    });
  }
};
