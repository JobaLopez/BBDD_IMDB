import { Movie } from './movie';

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Titulo: ", function(title) {
    rl.question("Año de lanzamiento ", function(releaseYear) {
        rl.question("Actores: ", function(actors) {
            rl.question("Nacionalidad: ", function(nationality) {
                rl.question("Director: ", function(director) {
                    rl.question("Escritor: ", function(writer) {
                        rl.question("Idioma: ", function(language) {
                            rl.question("Plataforma: ", function(platform) {
                                rl.question("Es del Universo Marvel: ", function(isMCU) {
                                    rl.question("Personaje principal: ", function(mainCharacterName) {
                                        rl.question("Productor: ", function(producer) {
                                            rl.question("Distribuidor: ", function(distributor) {
                                               rl.question("Género: ", function(genre) {
                                                    let pelicula5: Movie = new Movie (title, releaseYear, nationality, genre);
                                                    pelicula5.setActors(actors);
                                                    pelicula5.setDirector(director);
                                                    pelicula5.setWriter(writer);
                                                    pelicula5.setLanguage(language);
                                                    pelicula5.setPlatform(platform);
                                                    pelicula5.setIsMCU(isMCU);
                                                    pelicula5.setMainCharacterName(mainCharacterName);
                                                    pelicula5.setProducer(producer);
                                                    pelicula5.setDistributor(distributor);                                                    
                                                    rl.close();
                                                    const fs = require("fs");
                                                    let pelicula5JSON = JSON.stringify(pelicula5);
                                                    let imdbBBDD2 = fs.readFileSync("./imdbBBDD.json");
                                                    let pelicula5js = JSON.parse(pelicula5JSON);
                                                    let imdbBBDD2js = JSON.parse(imdbBBDD2);
                                                    imdbBBDD2js.movies.push(pelicula5js);                                        
                                                    fs.writeFileSync("newJSON.json", imdbBBDD2js);
                                               });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});



