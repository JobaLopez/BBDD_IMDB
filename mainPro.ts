import { Professional } from './professional'
import { Movie } from "./movie";
import { Imdb } from './imdb';

let actor1: Professional = new Professional("nombreActor1", 21, "masculino", 79, 1.80, "cabelloActor1", "ojosActor1", "caucásica", false, "española", 0, "actor");
let actor2: Professional = new Professional("nombreActor2", 22, "femenino", 65, 1.76, "cabelloActor2", "ojosActor2", "negroide", true, "venezolana", 0, "actor");
let actor3: Professional = new Professional("nombreActor3", 23, "masculino", 81, 1.82, "cabelloActor3", "ojosActor3", "caucásica", false, "estadounidense", 1, "actor");

let director1: Professional = new Professional("nombreDirector1", 51, "masculino", 74, 1.72, "cabelloDirector1", "ojosDirector1", "caucásica", true, "española", 0, "director");
let director2: Professional = new Professional("nombreDirector2", 52, "masculino", 75, 1.73, "cabelloDirector2", "ojosDirector2", "caucásica", false, "aleman", 1, "director");
let director3: Professional = new Professional("nombreDirector3", 53, "femenino", 64, 1.73, "cabelloDirector3", "ojosDirector3", "australoide", false, "australiana", 1, "director");

let escritor1: Professional = new Professional("nombreEscritor1", 30, "masculino", 70, 1.75, "cabelloEscritor1", "ojosEscritor1", "caucásica", false, "española", 0, "escritor");
let escritor2: Professional = new Professional("nombreEscritor2", 31, "masculino", 71, 1.76, "cabelloEscritor2", "ojosEscritor2", "negroide", false, "frances", 0, "escritor");
let escritor3: Professional = new Professional("nombreEscritor3", 32, "masculino", 72, 1.77, "cabelloEscritor3", "ojosEscritor3", "mogoloide", true, "ingles", 0, "escritor");

let productor1: Professional = new Professional("nombreProductor1", 41, "femenino", 80, 1.80, "cabelloProductor1", "ojosProductor1", "caucásica", false, "española", 0, "productor");
let productor2: Professional = new Professional("nombreProductor2", 42, "masculino", 81, 1.79, "cabelloProductor2", "ojosProductor2", "caucásica", false, "española", 0, "productor");
let productor3: Professional = new Professional("nombreProductor3", 43, "femenino", 71, 1.78, "cabelloProductor3", "ojosProductor3", "negroide", true, "española", 0, "productor");

// actor1.imprimirValores();
// director2.imprimirValores();
// escritor3.imprimirValores();
// productor2.imprimirValores();

let movie1 : Movie = new Movie ("El señor de los ganchitos", 2002, "Española", "Aventura");
let movie2 : Movie = new Movie ("pelicula2", 2015, "Española", "Aventura");
let movie3 : Movie = new Movie ("pelicula3", 2020, "Española", "Aventura");

let listaimdb: Imdb = new Imdb([movie1, movie2, movie3]);

movie1.setActors([actor1, actor2, actor3]);
movie2.setActors([actor1, actor2]);
movie3.setActors([actor1, actor3]);

movie1.setDirector(director1);
movie2.setDirector(director2);
movie3.setDirector(director3);

movie1.setWriter(escritor1);
movie2.setWriter(escritor2);
movie3.setWriter(escritor3);

movie1.setProducer(productor1);
movie2.setProducer(productor2);
movie3.setProducer(productor3);

console.log(listaimdb);

// const fs = require("fs");

// let imdbJSON = JSON.stringify(listaimdb);
// fs.writeFileSync("imdbBBDD.json", imdbJSON);

// fs.readFileSync("imdbBBDD.json");

// const obj = JSON.parse(imdbJSON);

// console.log(obj);

listaimdb.escribirEnFicheroJSON("prueba1.json");

console.log(listaimdb.obtenerInstaciaIMDB("prueba1.json"));