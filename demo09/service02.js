const http = require('http');
const url = require('url');
const router = require('./module/router')


http.createServer((req, res)=>{
  let pathName = url.parse(req.url).pathname;
  router.static(req,res,pathName);
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');