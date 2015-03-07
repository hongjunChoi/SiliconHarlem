var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

var reviewSchema = new mongoose.Schema({
  text: String
});

var courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: String,
  department: String,
  instructor: String,
  reviews: [reviewSchema]
}, {versionKey: false});

var Review = mongoose.model('Reviews', reviewSchema);
var Course = mongoose.model('Courses', courseSchema);

module.exports = {
  Review: Review,
  Course: Course,
  mongoose: mongoose,
  db: db.collection('Courses')
};
