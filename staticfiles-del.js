const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
  const readStream = fs.createReadStream('./static/cryptoDilo.png');
  res.writeHead(200,{'Content-Type': 'image/png'});
  readStream.pipe(res);
}).listen(3000);