var fs = require("fs");
var path = require('path');
var package = path.join(__dirname, 'package.json');

var config = JSON.parse(fs.readFileSync(package));

var argv = process.argv;

console.log(argv)

//启动进程
var port = 80;
//环境类型
var type = "env";

argv.forEach(function(item){
	if(/^-p/.test(item)){
		port = item.replace("-p","");
	}else if(/^-n/.test(item)){
		type  = item.replace("-n","");
	}
});
//mysql 链接
var mysqlPort = config[type];


module.exports = {
	port : port,
	mysqlPort : mysqlPort,
	type : type
};
