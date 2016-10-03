var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var string = buffer.toString();
var arrayLines = string.split('\n');
console.log(arrayLines.length - 1);