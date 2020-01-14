/*
普通方法
function test(){
  return "你好洒啊 我好普通"
}
console.log(test());
*/ 

/*
async function test(){        //Promise { '你好洒啊 我好普通' }
  return "你好洒啊 我好普通"
}
console.log(test());

async function test(){        //Promise { '你好洒啊 我好普通' }
  return "你好洒啊 我好普通"
}
async function main(){
  let data = await test(); //await 获取异步方法的数据，await是只能在异步方法里使用
  console.log(data);
}
main();
*/ 
async function test(){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      let name = "伊朗少将"
      res(name);
    }, 2000)
  })
}

async function main(){
  let data = await test();
  console.log(data);
}

main();