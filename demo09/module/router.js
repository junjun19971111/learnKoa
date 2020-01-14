const fs = require('fs');
const path = require('path');
const get = require('./getType');

exports.static = function (req, res, pathName){
  if(pathName == '/'){
    pathName = '/index.html';
  }
  if(pathName != '/favicon.ico'){
    let exName = path.extname(pathName);
    fs.readFile('static'+pathName, (err, data)=>{
      if(err){
        fs.readFile('static/404.html', (err, data)=>{
          if(err){
            return;
          }
          res.writeHead(404, {'Content-Type': 'text/html; charset="utf-8"'});
          res.write(data);
          res.end();
        })
      }else{
        let typeName = get.getType(exName);
        res.writeHead(200, {'Content-Type': ''+typeName+'; charset="utf-8"'});
        res.write(data);
        res.end();
      }
    })
  }
}