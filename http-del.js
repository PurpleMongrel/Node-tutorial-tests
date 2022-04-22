const http = require('http');
const server = http.createServer((req,res) => {
   if (req.url === '/'){
      res.write('Ah yes... req.url === "/"');
      res.end();
   }
   else {
      res.write('using some other domain');
      res.end();
   }
   /* res.writeHead(200, {"Content-Type": "text/html"});
   res.write(`
   <body style="background-color:#293146">
      <h1 style="color:white">This is the res.write string</h1>
   </body>
      `);
   res.end(); */
})

server.listen('8000');