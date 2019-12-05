const fs = require("fs");
const path = require("path");

const resolve = path.resolve(__dirname, "index.js");
const str = "http://www.baidu.com/a.html";

console.log(path.dirname(str)); //相对路径 http://www.baidu.com
console.log(path.extname(str)); //扩展名 .html
console.log(path.basename(str)); //文件名 a.html

const redFile = path.resolve(__dirname, "1.txt");
console.log(redFile);
fs.readFile(redFile, (err, data) => {
  if (err) {
    console.log("a owwww");
  } else {
    console.log(data);
    console.log(data.toString());
  }
});
