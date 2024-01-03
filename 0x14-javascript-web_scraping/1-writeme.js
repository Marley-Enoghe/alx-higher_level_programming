#!/usr/bin/node

const ts = require('fs');
const filenamee = process.argv[2];
const content = process.argv[3];

ts.writeFile (filenamee, content, 'utf-8', (error) => {
    if (error) {
        console.log(error)
    }
});