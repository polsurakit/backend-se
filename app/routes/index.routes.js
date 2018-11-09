module.exports = function(app){
	var index = require('../controllers/index.controller');
	app.get('/', index.render);

	var user = require('../controllers/user');
	app.get('/register', user.register);
}