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

/* POST request to add a company to the database */
router.post('/companies/submit', function (req, res) {
  console.log('req: body: %j', req.body);
  var body = req.body;
  var name = body.name;
  var address = body.address;
  var contact = body.contact;
  var description = body.description;
  var data = {'address':address, 'contact':contact, 'name':name, 'description':description};
  console.log('post: data: %j', data);
  companiesDb.createCompany(data, function (err) {
    if (err) {
      console.log(err);
      res.send({'result':'fail', 'error':err});
    }
  });
  res.send({'result':'success'});
});

module.exports = router;
