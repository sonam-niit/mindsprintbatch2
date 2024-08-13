const http = require('http');
const fs = require('fs/promises');
const users = [];

const server = http.createServer(async (req, res) => {
    if (req.url == '/home' && req.method == 'GET') {
        const data = await fs.readFile('./pages/home.html');
        res.write(data);
        res.end();
    } else if (req.url == '/users' && req.method == 'GET') {
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url == '/users' && req.method == 'POST') {
        let data = '';
        req.on('data', (chunck) => {
            data += chunck;
        })
        req.on('end', () => {
            //console.log(data,typeof(data));
            users.push(JSON.parse(data));
            res.write("Users registered");
            res.end();
        })

    } else if (req.url == '/users' && req.method == 'PUT') {
        res.write("Users Put method triggered");
        res.end();
    } else if (req.url == '/users' && req.method == 'DELETE') {
        res.write("Users DELETE method triggered");
        res.end();
    }

    else {
        res.write("No mapping found");
        res.end();
    }
})

//start server
server.listen(5000, () => {
    console.log("Server Started");
})