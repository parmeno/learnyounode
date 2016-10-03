var fs = require('fs');
fs.readFile(process.argv[2], function (error, buffer) {
	if (error) {
		console.log(error);
	}
	var string = buffer.toString();
	var arrayLines = string.split('\n');
	console.log(arrayLines.length - 1);
});