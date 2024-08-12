const fs = require('fs');

console.log("Operation started");

fs.writeFileSync('./files/hello.txt','Hello Good Morning...\n');
console.log("Data Written Successfully");
fs.appendFileSync('./files/hello.txt','Hello Good Morning...\n');
console.log("Data appended Successfully");
const data=fs.readFileSync('./files/hello.txt');
console.log(data.toString());

console.log("Operation completed");

