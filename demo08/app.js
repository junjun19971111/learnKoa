//管道流 当数据传输较大的时候
const fs = require('fs');

let readStream = fs.createReadStream('./aaa.jpeg');
let writeStream = fs.createWriteStream('./data/bbb.jpeg');

readStream.pipe(writeStream);