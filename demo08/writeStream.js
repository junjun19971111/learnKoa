const fs = require('fs');

let writeStream = fs.createWriteStream('./data/output.txt');
let str = "";

for(let i = 0; i< 1000;i++){
  str+="我是从数据库获取的数据，我要被保存起来\n";
}

writeStream.write(str);
writeStream.end();
writeStream.on('finish',()=>{
  console.log("写入完成");
})
