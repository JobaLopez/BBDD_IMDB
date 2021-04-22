const fs = require("fs");

let pelicula5 = fs.readFileSync("pelicula5.json");
let imdbBBDD2 = fs.readFileSync("./imdbBBDD.json");
let pelicula5js = JSON.parse(pelicula5);
let imdbBBDD2js = JSON.parse(imdbBBDD2);

imdbBBDD2js.movies.push(pelicula5js);

// console.log(pelicula5js);
console.log(imdbBBDD2js);

// console.log(imdbBBDD2js);