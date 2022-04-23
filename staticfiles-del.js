const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
  const readStream = fs.createReadStream('./static/b-del.js');
  res.writeHead(200,{'Content-Type': 'application/javascript'});
  readStream.pipe(res);
}).listen(3000);