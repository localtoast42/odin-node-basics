const express = require('express');
const app = express();
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

function sendPage(filePath, res, responseCode) {
    fs.readFile(filePath, (err, data) => {
        res.writeHead(responseCode, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

app.get('/', (req, res) => {
    sendPage('index.html', res, 200);
});

app.get('/about', (req, res) => {
    sendPage('about.html', res, 200);
});

app.get('/contact-me', (req, res) => {
    sendPage('contact-me.html', res, 200);
});

app.use((req, res, next) => {
    sendPage('404.html', res, 404);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});