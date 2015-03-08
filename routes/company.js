var express = require('express');
var companiesDb = require('../db/company');

var router = express.Router();

/* GET all companies */
router.get('/companies', function (req, res) {
  // TODO: Get data for all courses and respond to the GET request with this data.
  companiesDb.findCompanies(function (err, companies) {
    res.send(companies);
    if (err) {
      console.log(err);
    }
  });
});

/* GET course show page. */
router.get('/companies/:id', function (req, res) {
  // TODO: Render the index page
  res.render('index');
});


module.exports = router;
