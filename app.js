// The main application script, ties everything together.
var express = require('express');
var mongoose = require('mongoose');
var app = module.exports = express();

// connect to Mongo when the app initializes
var MONGOHQ_URL = 'mongodb://journoapp:LoveHacking2012@alex.mongohq.com:10066/snapmapper';

mongoose.connect(MONGOHQ_URL);

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express['static'](__dirname + '/snapmapper/site/'));
	app.use(express.methodOverride());
	app.use(app.router);
});

// set up the RESTful API, handler methods are defined in api.js
var api = require('./controllers/api.js');
app.post('/thread', api.post);
app.get('/thread/:title.:format?', api.show);
app.get('/businesses', api.list);

app.listen(3000);
console.log('listening on port %d', 3000);