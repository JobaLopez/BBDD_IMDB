import { Movie } from './movie';

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question("Titulo: ", function(title) {
    rl.question("Año de lanzamiento ", function(releaseYear: number) {
        rl.question("Actores: ", function(actors) {
            rl.question("Nacionalidad: ", function(nationality) {
                rl.question("Director: ", function(director) {
                    rl.question("Escritor: ", function(writer) {
                        rl.question("Idioma: ", function(language) {
                            rl.question("Plataforma: ", function(platform) {
                                rl.question("Es del Universo Marvel: ", function(isMCU: boolean) {
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
                                                    console.log(pelicula5);
                                                    rl.close();
                                                    const fs = require("fs");
                                                    let pelicula5JSON = JSON.stringify(pelicula5);
                                                    fs.writeFileSync("pelicula5.json", pelicula5JSON);
                                                    let imdbBBDD = fs.readFileSync("./imdbBBDD.json"); 
                                                    let imdbJSON = JSON.parse(imdbBBDD);
                                                    imdbJSON.push(pelicula5);
                                                    fs.writeFileSync("newJSON.json", imdbJSON);
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



