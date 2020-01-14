const http = require('http');
const tool = require('./module/tool.js');
const url = require('url');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });

  res.write("<head><meta charset='UTF-8'></head>");
  res.write("你好啊");
  if (req.url != '/favicon.ico') {
    let getValue = url.parse(req.url, true).query;
    console.log(getValue);
    console.log(tool.getApi(req.url));
    console.log(`姓名：${getValue.name}-----年龄：${getValue.age}`);
  }
  res.end('Hello World');
}).listen(8088);