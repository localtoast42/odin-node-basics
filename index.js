const { createServer } = require('node:http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

const server = createServer((req, res) => {
    let filePath = '';
    let responseCode = 200;

    switch (req.url) {
        case '/':
            filePath = 'index.html';
            break;
        case '/about':
            filePath = 'about.html';
            break;
        case '/contact-me':
            filePath = 'contact-me.html';
            break;
        default:
            filePath = '404.html';
            responseCode = 404;
    }

    fs.readFile(filePath, (err, data) => {
        res.writeHead(responseCode, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});