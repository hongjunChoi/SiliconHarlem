var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index');
var course = require('./routes/companies');
var review = require('./routes/reviews');
var app = express();

// serve static pages
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// TODO Make app use routes
app.use(index);
app.use(company);
app.use(review);

module.exports = app;
