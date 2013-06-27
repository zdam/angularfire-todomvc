console.log('starting');
console.log(__dirname);
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(4000, '0.0.0.0');
console.log('Server running'); 





