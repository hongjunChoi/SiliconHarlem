var seeder = require('seeder');
var mongo = require('./mongo');
var seedData = require('./seedData');

var seedDb = function (done) {
  seeder(seedData, mongo.mongoose, function (err) {
    if (err) {
      console.log(err);
    } else {
      done();
    }
  });
};

(function () {
  seedDb(function () {
    console.log('Your database has been seeded.');
    process.exit();
  });
})();
