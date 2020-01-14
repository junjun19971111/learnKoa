const fs = require('fs');

let readStream = fs.createReadStream('./data/input.txt');
let str = "";
let count = 0;

readStream.on('data', (data) => {
  str += data;
  count++;
})

readStream.on('end', () => {
  console.log(str);
  console.log(count);
})

readStream.on('error', (error) => {
  console.log(error);
})