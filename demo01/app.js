//表示引入http模块
const http = require('http');
const url = require('url');

http.createServer(function (request, response) {
  console.log(request.url);
  response.writeHead(200, {'Content-Type': 'text/html; charset="utf-8"'});
  response.write("<head><meta charset='UTF-8'></head>");
  response.write("你好啊");
  response.end('Hello World');
  if(request.url!='/favicon.ico'){
    let getValue = url.parse(request.url, true).query;
    console.log(getValue);  
    console.log(`姓名：${getValue.name}-----年龄：${getValue.age}`);
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');