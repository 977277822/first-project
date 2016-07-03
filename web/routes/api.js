/**
 * Created by Mr.Carry on 16/7/3.
 */
var express = require('express');
var router = express.Router();
var muItemService = require("../com/julvren/service/mu_item_service");


router.get('/items', function(req, res, next) {
    muItemService.query(function(data){
        res.send(JSON.stringify(data));
    });
});

module.exports = router;
