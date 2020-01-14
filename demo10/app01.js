const events = require('events');

let EventEmitter = new events.EventEmitter();

EventEmitter.on('to_parent', ()=>{
  console.log("接收到了这个广播");
})

setTimeout(()=>{
  console.log("开始广播...");
  EventEmitter.emit('to_parent')
}, 2000)