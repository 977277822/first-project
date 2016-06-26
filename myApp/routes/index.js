var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/views/home', function(req, res, next) {
  res.render('views/home', { title: 'Express' });
});

router.get('/views/items', function(req, res, next) {
  res.render('views/items', { title: 'Express' });
});

router.get('/views/performer', function(req, res, next) {
  res.render('views/performer', { title: 'Express' });
});

router.get('/views/judge', function(req, res, next) {
  res.render('views/judge', { title: 'Express' });
});

router.get('/views/new_plays', function(req, res, next) {
  res.render('views/new_plays', { title: 'Express' });
});

module.exports = router;
