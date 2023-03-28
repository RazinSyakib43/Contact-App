//File System
const fs = require('node:fs');

// //menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/text.txt', 'Hellow World secara syncronous!');
// } catch (e) {
//     console.log(e);
// }

// menuliskan string file (asyncronous)
// fs.writeFile('data/text.txt', 'Hellow World secara asyncronous!', (e) => {
//   console.log(e);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/text.txt', 'utf-8');
// console.log(data);

// membaca isi file (asynchronous)

fs.readFile('data/text.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});