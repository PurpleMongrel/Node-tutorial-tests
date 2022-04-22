const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip()
const readStream = fs.createReadStream('./destination-del.gz');
const writeStream = fs.createWriteStream('./uncompressed-del.txt');

/* readStream.on('data', (chunk)=>{
  writeStream.write(chunk);
}) */

readStream.pipe(gunzip).pipe(writeStream);