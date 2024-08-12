const fs = require('fs');
console.log("File Write Op Started");
fs.writeFile('./files/data.txt', 'Hello From node\n', (err) => {
    if (err)
        console.log(err);
    console.log('Data Written Successfully');
})
console.log("File Write Op Stopped");
fs.appendFile('./files/data.txt', 'another message \n', (err) => {
    if (err)
        console.log(err);
    console.log('Data appended Successfully');
})
fs.readFile('./files/data.txt', (err, data) => {
    if (err)
        console.log(err);
    else
        console.log(data.toString());
})