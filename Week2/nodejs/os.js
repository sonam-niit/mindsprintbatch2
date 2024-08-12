const os= require('os');

console.log('Home Directory',os.homedir());
console.log('Total Memory',os.totalmem()/(1024*1024*1024));
console.log('Free Memory',os.freemem()/(1024*1024*1024));
console.log('Architecture',os.arch());
console.log('Platform',os.platform());
console.log('Temp Directory',os.tmpdir());
console.log('Model',os.cpus()[0].model);
console.log('Speed',os.cpus()[0].speed);


