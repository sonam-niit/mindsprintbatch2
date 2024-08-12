const path= require('path');

console.log(path.delimiter);
console.log(path.sep);
const pathurl='D:\\test\\nodejs\\script.js';
console.log('Base Name:',path.basename(pathurl));
console.log('Extention ',path.extname(pathurl));
console.log(path.dirname(pathurl));
console.log(path.isAbsolute(pathurl));
console.log(path.isAbsolute('hello.html'));
console.log(path.isAbsolute('/sonam/hello.html'));
console.log(path.join('D:','www','public','index.html'));
const sample=path.format({
    dir:'D:\\sonam',
    name:'script',
    ext:'.js'
})
console.log(sample);
const sample1=path.format({
    dir:'D:\\sonam',
    base:'script.js'
})
console.log(sample1);






