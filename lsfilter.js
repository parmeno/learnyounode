var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(error, files) {
	files.forEach(function(files) {
		var a = path.extname(files);
		if('.'+process.argv[3]==a){
			console.log(files);
		}
	});
});
