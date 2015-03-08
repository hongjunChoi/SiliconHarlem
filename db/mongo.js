var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;


var companySchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: String,
  description: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    latitude: Number,
    longitude: Number
  },
  contact: {
    website: String,
    email: String
  }
}, {versionKey: false});

var Company = mongoose.model('Companies', companySchema); 

///###################find id of mongo

module.exports = {
  Company: Company,
  mongoose: mongoose,
  db: db.collection('Companies')
};
