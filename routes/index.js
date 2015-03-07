var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  // TODO: render the index html page
  res.render('index');
});

module.exports = router;
