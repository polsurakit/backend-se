var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else {
		app.use(compression);
	}
	app.use(bodyParser.urlencoded({
		extended : true
	}));
	app.use(bodyParser.json());

	
	require('../app/routes/index.routes.js')(app); //call function

	app.use(express.static('./public'));

	return app;
}