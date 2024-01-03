#!/usr/bin/node

const request = require ('request');
const movie = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movie}`;

request.get(url, (error, response, body) => {
    if (error) {
        console.log(error);
    }
    else{
        const data = JSON.parse(body);
        console.log(data.title);
    }
});