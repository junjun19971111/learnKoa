//判断服务器上有无upload目录，没有的话创建目录，有的话不做操作
const fs = require('fs');
const path = './upload';

fs.stat(path, (err, data) => {
  if (err) {
    mkdir(path);
    return;
  }
  if (data.isDirectory()) {
    console.log("目录已存在")
  } else {
    fs.unlink(path, (err)=>{
      if(!err){
        mkdir(path);
      }
      else{
        console.log("请检查传入的数据是否正确");
      }
    })
  }
})

function mkdir(dir) {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('创建目录成功');
  })
}

