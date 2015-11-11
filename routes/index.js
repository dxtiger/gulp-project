var fs = require('fs');
var path = require('path');
var config = require('../gulpfile.js/config.json');


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

	app.get('*/*',function(req,res){
		var _path = path.join(__dirname , '../', config.root.dest ,req.path);
		if(/\.ico/.test(req.path)){
			res.send('');
			return
		}
		var files = fs.readdirSync(_path);
		var str = '<ul>';
		files.forEach(function(item){
			str += '<li><a href="'+ path.join( req.path  , item) +'">'+ item +'</a></li>'
		})
		str += '</ul>';
		res.send(str);
	})
}