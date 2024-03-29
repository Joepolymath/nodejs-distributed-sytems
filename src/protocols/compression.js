const zlib = require('zlib');
const fs = require('fs');
const http = require('http');
const path = require('path');

const startCompressionServer = () => {
  const PORT = 3001;

  http
    .createServer((request, response) => {
      const raw = fs.createReadStream(
        path.join(__dirname, '../..', 'static', 'index.html')
      );
      const acceptEncoding = request.headers['accept-encoding'] || '';
      response.setHeader('Content-Type', 'text/plain');

      if (acceptEncoding.includes('gzip')) {
        console.log('encoding with gzip');
        response.setHeader('Content-Encoding', 'gzip');
        raw.pipe(zlib.createGzip()).pipe(response);
      } else {
        raw.pipe(response);
      }
    })
    .listen(PORT, () => {
      console.log('Server running at port', PORT);
      console.log(`Process ID ${process.pid}`);
    });
};

module.exports = startCompressionServer;
