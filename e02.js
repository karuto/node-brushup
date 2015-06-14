// The global process object has an argv property which contains command line
// [ 'node', '/path/to/your/program.js', '1', '2', '3' ]
// console.log(process.argv);
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
	sum += Number(process.argv[i]);
}
console.log(sum);