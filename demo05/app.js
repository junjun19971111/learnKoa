/*
1. fs.stat 检测是文件还是目录
2. fs.mkdir 创建目录
3. fs.writeFile 创建写入文件
4. fs.appendFile 追加文件
5. fs.readFile 阅读文件
6. fs.readdir 读取目录
7. fs.reaname 重命名
8. fs.rmdir 删除目录
9.fs.unlink 删除文件
*/
const fs = require("fs");
//1. fs.stat 检测是文件还是目录
// fs.stat('./html', (err, data)=>{
//   if(err){
//     console.log(err);
//     return 
//   }
//   console.log(`是文件：${data.isFile()}`);
//   console.log(`是目录：${data.isDirectory()}`);
// })
// fs.stat('./package.json', (err, data)=>{
//   if(err){
//     console.log(err);
//     return 
//   }
//   console.log(`是文件：${data.isFile()}`);
//   console.log(`是目录：${data.isDirectory()}`);
// })

//2. fs.mkdir 创建目录
// fs.mkdir('./css', (err)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log("创建成功");
// })

//3. fs.writeFile 创建写入文件
// fs.writeFile('./html/index.html', '你好啊, node.js', (err)=>{
//   if(err){
//     console.log(err);
//     return ;
//   }
//   console.log("创建写入文件成功");
// })

//4.fs.appendFile 追加文件
// fs.appendFile('./css/base.css', 'h2{color: red}', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("appendFile文件成功");
// })

//5.fs.readFile 阅读文件
// fs.readFile('./html/index.html', (err, data)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data);
//   console.log(data.toString());
// })

// 6. fs.readdir 读取目录 [ 'index.html', 'js', 'news.html' ]
// fs.readdir('./html', (err, data)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data);
// })

// 7. fs.reaname 重命名
// fs.rename('./css/base.css', './html/index.css', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('文件重命名成功');
// })

// 8. fs.rmdir 删除目录
// fs.rmdir('./html/js', (err)=>{
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('目录删除成功');
// })

// 9.fs.unlink 删除文件
fs.unlink('./html/index.css', (err)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log('文件删除成功');
})