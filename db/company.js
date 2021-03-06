var mongo = require('./mongo');

module.exports = {
  findCompanies: function (callback) {
    mongo.Company.find(function (err, companies) {
      callback(err, companies); //Unknown, find documentation on this#####
    });//implementation of mongodb datastructure########
  }, // change this to find ALL companies.

  findCompany: function (_id, callback) {
    mongo.Company.findById(_id, function (err, company) {
      callback(err, company);
    });
  }, // change this to find a particular company with the given id. Can also find by name instead of id.

  createCompany: function(data, callback) {
    data._id = null;
    var co = new mongo.Company(data);
    co.save(function (err) {
      if (err) {
        console.log(err);
      }
    });
    window.indexView.render();
    // mongo.Company.save(data);
  }
};

