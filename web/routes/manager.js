var express = require('express');
var router = express.Router();

var muItemService = require("../com/julvren/service/mu_item_service")

/* GET home page. */
router.get('/', function(req, res, next) {
  muItemService.query(function(data){
    res.render('manager', { items : data});
  })
});

router.get('/page/items', function(req, res, next) {
  res.render('page/items');
});

router.get('/page/index', function(req, res, next) {
  res.render('page/index');
});
module.exports = router;
