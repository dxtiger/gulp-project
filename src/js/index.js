var domready = require('./model/domready');
var test = require('./model/test');

function get(){
	var btn = document.getElementById('get');
	btn.addEventListener('click',function(){
		test('/test','callback')
	},false);
}
function callback(data){
	console.log(data);
	var dom = document.getElementById('result');
	dom.innerHTML = JSON.stringify(data);
}
window['callback'] = callback;

domready(function(){
	get();
})