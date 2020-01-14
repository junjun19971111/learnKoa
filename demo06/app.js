const fs = require('fs');
const path = './wwwroot';

// let dirArry = [];
// fs.readdir(path, (err, data)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   for(let i = 0 ; i< data.length; i++){
//     fs.stat(path+'/'+data[i], (error, states)=>{
//       if(error){
//         console.log(error);
//         return;
//       }
//       if(states.isDirectory()){
//         dirArry.push(data[i]);
//       }
//     })
//   }
// })

// setTimeout(()=>{
//   console.log(dirArry);
// },2000)
let dirArry = [];
fs.readdir(path, (err, data)=>{
  // let i = 0; 
  if(err){
    console.log(err);
    return;
  }
  (function getDie(i){
    if(i==data.length){
      console.log(dirArry);
      return;
    }
    fs.stat(path+'/'+data[i], (error, states)=>{
      if(states.isDirectory()){
        dirArry.push(data[i]);
      }
      getDie(i+1);
    })
  })(0)
})