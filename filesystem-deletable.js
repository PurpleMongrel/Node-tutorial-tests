const fs = require('fs');

/* fs.writeFile('example-deletable.txt', "just testing!", (err) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log('File successfully created');
    fs.readFile('example-deletable.txt','utf8',(err, file)=>{
      if(err) {
        console.log(err);
      }
      else {
        console.log(file);
      }
    })
  }
}) */

/* fs.rename('example-deletable.txt','example2-deletable.txt', (err)=>{
  if (err){
    console.log(err);
  }
  else {
    console.log('Successfully renamed file');
  }
}) */

/* fs.appendFile('example2-deletable.txt', '\nHail Satan', (err)=>{
  if(err){
    console.log(err);
  }
  else {
    console.log('Successfully appended data');
  }
}) */

/* fs.unlink('example2-deletable.txt',(err)=>{
  if (err){
    console.log(err);
  }
  else{
    console.log('File deleted.')
  }
}) */

fs.writeFile('filesystem3-deletable.js','',()=>{})