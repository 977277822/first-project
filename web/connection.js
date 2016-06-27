var mysql = require('mysql');
var config = {

	host: '115.28.222.166',

	user: 'ruxi',

	password: 'jade',

	port: '3306',

	database: 'web'
}
var pool = mysql.createPool(config);



module.exports = {
	query: function(sql, params, callback) {
		pool.getConnection(function(err, connection) {
			// Use the connection
			connection.query(sql, params, function(err, result) {
				if (err) {
					console.log('[ERROR] - ', err.message);
					return;
				}
				callback(result);
				connection.release();
			});
		});
	}
};
