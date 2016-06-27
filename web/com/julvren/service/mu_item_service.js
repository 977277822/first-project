/**
 * 剧目service
 */

var con = require("../../../connection");

var queryItems = "select * from mu_item";

module.exports = {
    query : function(callback){
        con.query(queryItems,[],callback);
    }
}
