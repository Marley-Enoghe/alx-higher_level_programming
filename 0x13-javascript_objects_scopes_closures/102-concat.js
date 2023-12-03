#!/usr/bin/node
const argv = process.argv;
const fss = require('fss');
const fileA = argv[2];
const fileB = argv[3];
const fileC = argv[4];

const fileReader = (file) => {
  return new Promise((resolve, reject) => {
    fss.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const promises = [fileA, fileB].map(fileReader);

Promise.all(promises)
  .then((resolve) => {
    const text = resolve.join('');
    fss.writeFile(fileC, text, (err) => {
      if (err) throw err;
    });
  })
  .catch((err) => console.log(err));
