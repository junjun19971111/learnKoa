const mkdirp = require('mkdirp');

mkdirp('./upload', (err)=>{
  if(err){
    console.log(err);
  }
})