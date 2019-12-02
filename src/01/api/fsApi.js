const fs = require("fs");
const path = require("path");

const resolve = path.resolve(__dirname, "index.js");
const str = "http://www.baidu.com/a.html";

console.log(path.dirname(str)); //相对路径 http://www.baidu.com
console.log(path.extname(str)); //扩展名 .html
console.log(path.basename(str)); //文件名 a.html
console.log(resolve);

fs.readFile("1.txt", (err, data) => {
  if (err) {
    console.log("a owwww");
  } else {
    console.log(data);
  }
});
