require('dotenv').config();
const http = require('http');

function requestController(req, res) {
  console.log('Bienvenidos al curso');
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Bienvenidos al curso');
}

const server = http.createServer(requestController);
const PORT = process.env.PORT;

server.listen(PORT, '0.0.0.0', function () {
  console.log('Aplicacion corriendo en: ' + PORT);
});
