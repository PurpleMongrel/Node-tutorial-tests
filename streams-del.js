const fs = require('fs');

let chunkIndex = 0;

const readStream = fs.createReadStream('./example-del.txt', 'utf8');
const writeStream = fs.createWriteStream

readStream.on('data', (chunk)=>{
  console.log(chunk);
})