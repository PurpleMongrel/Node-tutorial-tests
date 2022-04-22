const fs = require('fs');

/* fs.mkdir('folder-deletable', (err) => {
  if (err) console.log(err);
  else {
    fs.writeFile('./folder-deletable/testFile-del.txt', 'Hail Dilo!', (err) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log('Successfully created file');
      }
    })
  }
})
 */

/* fs.unlink('./folder-deletable/testFile-del.txt', (err)=>{
  if (err) console.log(err);
  else {
    console.log('deleted file');
    fs.rmdir('folder-deletable', (err)=>{
      if (err) console.log(err);
      else console.log('deleted folder');
    })
  }
});

fs.rmdir('folder-deletable', (err)=>{
  if (err) console.log(err);
  else console.log('deleted folder');
}) */

fs.readdir('folder-del', (err, files)=>{
  if (err) console.log(err);
  else {
    for (let file of files) {
      fs.unlink('./folder-del/' + file, (err)=>{
        if (err) console.log(err);
        else {
          console.log('successfully deleted: ' + file); 
        }
      });

    }
    console.log(files);
  }
})