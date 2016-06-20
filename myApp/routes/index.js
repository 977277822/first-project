var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/views/home', function(req, res, next) {
  res.render('views/home', { title: 'Express' });
});

module.exports = router;
