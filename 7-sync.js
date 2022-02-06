const{ readFileSync,writeFileSync, read, readFile}=require("fs");
const first=readFileSync("./dist/first.txt","utf-8");
const second=readFileSync("./dist/second.txt","utf-8");
// console.log(first,second);

writeFileSync("./dist/result.txt",`here is your result:${first},${second}`,{flag:'a'});