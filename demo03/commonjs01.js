const request = require('./module/request');

// console.log(request); //{ xxx: { get: [Function: get], post: [Function: post] } }
// console.log(request); //{ get: [Function: get], post: [Function: post] }
request.get();
request.post();
