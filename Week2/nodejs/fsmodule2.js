const fs1 = require('fs');
const fs = require('fs/promises');
async function readData(filename) {
    try {
        if (fs1.existsSync(filename)) {
            const data = await fs.readFile(filename);
            console.log(data.toString());
        }else{
            console.log('file not exist');
        }
    } catch (error) {
        console.log(error);
    }
}
readData('./filess/data.txt')