#!/usr/bin/node
const dict = require('./101-data.js').dict;

const newDicts = {};

Object.getOwnPropertyNames(dict).forEach(occurences => {
  if (newDicts[dict[occurences]] === undefined) {
    newDicts[dict[occurences]] = [occurences];
  } else {
    newDicts[dict[occurences]].push(occurences);
  }
});
console.log(newDicts);
