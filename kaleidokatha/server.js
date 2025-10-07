const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8002;
const baseDir = __dirname; // Use the directory where server.js is located

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Parse URL to remove query parameters
    const url = new URL(req.url, `http://localhost:${port}`);
    let filePath = path.join(baseDir, url.pathname);
    
    if (url.pathname === '/') {
        filePath = path.join(baseDir, 'index.html');
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeType = mimeTypes[extname] || 'application/octet-stream';

    console.log('Requesting URL:', req.url);
    console.log('Parsed pathname:', url.pathname);
    console.log('Serving file:', filePath);

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                console.log('File not found:', filePath);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1><p>Requested: ' + req.url + '</p><p>Looking for: ' + filePath + '</p>', 'utf-8');
            } else {
                console.log('Server error:', error.code);
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        } else {
            console.log('Successfully serving:', filePath);
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(content, 'utf-8');
        }
    });
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log('Press Ctrl+C to stop the server');
    console.log('Base directory:', baseDir);
});