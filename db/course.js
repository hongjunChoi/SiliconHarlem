var mongo = require('./mongo');
//change file to company.js#########
module.exports = {
  findCompanies: function (callback) {
    mongo.Course.find(function (err, companies) {
      callback(err, companies); //Unknown, find documentation on this#####
    });//implementation of mongodb datastructure########
  }, // change this to find ALL companies.

  findCompany: function (_id, callback) {
    mongo.Course.findById(_id, function (err, company) {
      callback(err, company);
    });
  } // change this to find a particular company with the given id.
};

