import fs from 'fs';

function readPoem(callback) {
  fs.readFile('poem.txt', 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
}

// Example of using readPoem function with a callback
readPoem((err, poemData) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('Contents of the poem:');
  console.log(poemData);
});

