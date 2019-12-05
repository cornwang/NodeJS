// const fn = async function() {
//   let num = await 1;
//   console.log("111", num);
//   await new Promise(resolve =>
//     setTimeout(() => {
//       console.log(++num);
//       return resolve();
//     }, 0)
//   );
//   console.log("222", num);
//   return num;
// };

// fn().then(num => console.log("return", num));
// setTimeout(() => console.log(100), 0);

console.log("________");

let foo = async function() {
  return await 1;
};

foo().then(obj => console.log("cccc", obj)); // 1

// 下面将会在 1000 毫秒之后输出 hello world
let bar = async function() {
  return await new Promise(resolve => {
    setTimeout(() => resolve("hello world"), 4000);
  });
};

bar().then(src => console.log(src));
