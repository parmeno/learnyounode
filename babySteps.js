var sumTotal=0;
for (var c=2;c<process.argv.length;c++) {
	sumTotal += Number(process.argv[c])
}
console.log(sumTotal);
