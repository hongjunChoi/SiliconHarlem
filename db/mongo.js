var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;


var courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: String,
  department: String,
  instructor: String,
  reviews: [reviewSchema] //change this to data spec######

}, {versionKey: false});

var Company = mongoose.model('Company', courseSchema); 

///###################find id of mongo

module.exports = {
  Company: Company,
  mongoose: mongoose,
  db: db.collection('Companies')
};
