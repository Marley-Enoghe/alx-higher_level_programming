#!/usr/bin/node

let time = 0;
exports.logMe = function (item) {
  console.log(`${time}: ${item}`);
  time++;
};
