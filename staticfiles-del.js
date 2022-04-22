const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
  const readStream = fs.createReadStream('./static/statictest-del.html');
  res.writeHead(200,{'Content-Type' = 'text/html'});

}).listen(3000);