var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello World';
});


app.on('error', function(err, ctx){
	log.error('server error', err, ctx);
});


app.listen(3000);