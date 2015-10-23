var fs = require('fs');
var path = require('path');


function test(req,res){
	var data = fs.readFileSync(path.resolve(__dirname,'../data/a.json'),'utf-8');
	var cb = req.query.callback || false;
	if(cb){
		res.jsonp(JSON.parse(data))
	}else{
		res.send(data)
	}
}

module.exports = function(app) {
	app.get('/test',test);
}