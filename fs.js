var fs = require("fs");
var data = fs.readFile('main.js', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});
