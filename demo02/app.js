const url = require('url');

let api = "http://www.baidu.com?name=zhangsan&age=30";

let getValue = url.parse(api, true).query;
console.log(getValue);
