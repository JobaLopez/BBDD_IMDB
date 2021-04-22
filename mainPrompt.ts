import { Imdb } from './imdb';
import { Movie } from './movie';

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let movieN: Movie;
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
                                                    movieN = new Movie (title, Number(releaseYear), nationality, genre);
                                                    movieN.setActors(actors);
                                                    movieN.setDirector(director);
                                                    movieN.setWriter(writer);
                                                    movieN.setLanguage(language);
                                                    movieN.setPlatform(platform);
                                                    if (isMCU.toLowerCase() == "true") {
                                                        movieN.setIsMCU(true);
                                                    } else {
                                                        movieN.setIsMCU(false);
                                                    }
                                                    movieN.setMainCharacterName(mainCharacterName);
                                                    movieN.setProducer(producer);
                                                    movieN.setDistributor(distributor);                                                    
                                                    rl.close();
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

rl.on("close", function () {

    console.log(movieN.showProperties());

    const fs = require("fs");

    let imdb = new Imdb (JSON.parse(fs.readFileSync(`imdbBBDD.json`)));

    imdb.movies.unshift(movieN);

    console.log(imdb);

    imdb.escribirEnFicheroJSON("imdbBBDD");

    
       
    process.exit(0);

});

