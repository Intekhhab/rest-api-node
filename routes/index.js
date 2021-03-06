const express = require('express');
const router = express.Router();

const path = require('path');

/*Controllers*/
const users = require('./users');
const auth = require('./auth');
const product = require('./product');
const error = require('./error');

/* GET home page. */
router.get('/', (req, res, next) => {
  //res.render('index', { title: 'Intekhab' });
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/users', auth.checkAuth, users.get, error);

router.post('/login', auth.validate, auth.login, error);

router.get('/product', product.get, error);

module.exports = router;


/*module.exports = function(app) {
	app.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	});
}*/