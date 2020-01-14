var md5 = require('md5');
var sd = require('silly-datetime');

var d = sd.format(new Date(), 'YYYY-MM-DD HH:mm')
console.log(d);

console.log(md5('123456'));
