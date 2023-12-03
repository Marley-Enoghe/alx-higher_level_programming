#!/usr/bin/node

const diction = require('./101-data').diction;
const dictKeys = new Set(Object.values(diction).sort());

const newDict = function (params) {
  const newDictionary = {};

  params.forEach((element) => {
    newDictionary[element] = Object.keys(diction).filter(item => diction[item] === element);
  });
  return newDictionary;
};
console.log(newDict(dictKeys));
