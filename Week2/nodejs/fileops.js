const fs1 = require('fs');
const fs2 = require('fs/promises');

async function readFile(filename) {
    try {
        if (fs1.existsSync(filename)) {
            const data = await fs2.readFile(filename);
            console.log(data.toString());
        } else {
            console.log("File does not exist..");
        }
    } catch (error) {
        console.log(err);
    }
}
async function writeFile(filename, message) {
    try {
        await fs2.writeFile(filename, message);
        console.log('Data Written successfully');
    } catch (error) {
        console.log(err);
    }
}
async function copyFiles(src,dest) {
    try {
        await fs2.copyFile(src,dest,fs2.constants.COPYFILE_EXCL);
        console.log("File copied successfully");
    } catch (error) {
        console.log(err);
    }
}
async function listFiles(dirname) {
    try {
        const data= await fs2.readdir(dirname);
        console.log(data);
    } catch (error) {
        console.log(err);
    }
}
//writeFile('./files/data.txt','I am Sonam Soni')
//readFile('./files/data.txt')
//copyFiles('./files/data.txt','./files/sonam.txt')
listFiles(__dirname) //this is current directory