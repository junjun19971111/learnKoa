const fs = require('fs');
const path = './wwwroot'

async function isDir(path) {
  return new Promise((res, rej) => {
    fs.stat(path, (err, data) => {
      if (err) {
        console.log(err);
        rej(err);
        return;
      }
      if (data.isDirectory()) {
        res(true);
      } else {
        res(false);
      }
    })
  })
}

function main(path){
  let dirArry = [];
  fs.readdir(path, async (err, data)=>{
    if(err){
      console.log(err);
      return ;
    }
    for(let i = 0 ; i<data.length; i++){
      if(await isDir(path+'/'+data[i])){
        dirArry.push(data[i]);
      }
    }
    console.log(dirArry);
  })
}
main(path);