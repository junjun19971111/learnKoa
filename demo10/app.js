const fs = require('fs');
const events = require('events')
// console.log('1');
// fs.readFile('./mime.json',(err, data)=>{
//   if(err){
//     console.log(err);
//     return ;
//   }
//   console.log(data.toString());
//   console.log('2');
// })
// console.log('3');
let event = new events.EventEmitter();
function getJson(){
    fs.readFile('./mime.json',(err, data)=>{
    if(err){
      console.log(err);
      return ;
    }
    // return data.toString();
    // callback(data.toString());
    event.emit('get_json', data.toString())
  })
}

event.on('get_json',(data)=>{
  console.log(data);
})
getJson();