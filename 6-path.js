const path=require("path");
console.log(path.sep);
const filepath=path.join("udemy","test.txt");
console.log(filepath);

const base=path.basename(filepath);
console.log(base);

const absolute=path.resolve(__dirname,'udemy','test.txt');
console.log(absolute);