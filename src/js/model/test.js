function get(url,cb){
	var script = document.createElement('script');
	script.src = url+'?callback='+cb;
	document.getElementsByTagName('body')[0].appendChild(script);
}
module.exports = get;