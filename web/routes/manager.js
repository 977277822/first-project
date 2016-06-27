var express = require('express');
var router = express.Router();

var muItemService = require("../com/julvren/service/mu_item_service")

/* GET home page. */
router.get('/', function(req, res, next) {
  muItemService.query(function(data){
    console.log(data)
    res.render('manager', { items : data});
  })
});

module.exports = router;
