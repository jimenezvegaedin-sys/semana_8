const http = require('http');

function requestController(req, res) {
  console.log('Bienvenidos al curso');
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Bienvenidos al curso');
}

http.createServer(requestController).listen(4000);
