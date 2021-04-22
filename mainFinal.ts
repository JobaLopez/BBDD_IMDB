import {
    Imdb
} from './imdb';
import {
    Movie
} from './movie';
import {
    Professional
} from './professional';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let movieN: Movie = new Movie("", 0, "", "");
let actors: Professional[];
let director: Professional = new Professional("", 0, "", 0, 0, "", "", "", false, "", 0, "");
let writer: Professional = new Professional("", 0, "", 0, 0, "", "", "", false, "", 0, "");
let producer: Professional = new Professional("", 0, "", 0, 0, "", "", "", false, "", 0, "");

rl.question("¿Cuál es el título de la película? ", function (title: string) {

    rl.question("¿En qué año se estrenó? ", function (releaseYear: string) {

        rl.question("¿Cuantos actores participan? ", function (actorNum: string) {

                actors = new Array(Number(actorNum));

                for (let i = 0; i < actors.length; i++) {

                    let actorN : Professional = new Professional("", 0, "", 0, 0, "", "", "", false, "", 0, "");
                    actors[i] = actorN;

                    rl.question("¿Cómo se llama el actor? ", function (actorName: string) {

                        actors[i].name = actorName;

                        rl.question("¿Cuantos años tiene? ", function (actorAge: string) {

                            actors[i].age = Number(actorAge);

                            rl.question("¿Es hombre o mujer? ", function (actorGenre: string) {

                                if (actorGenre == "Mujer" || actorGenre == "mujer") {
                                    actors[i].profession = "Actriz";
                                    actors[i].genre = "Mujer";
                                } else {
                                    actors[i].profession = "Actor";
                                    actors[i].genre = "Hombre";
                                }

                                rl.question("¿Cuánto pesa (kg)? ", function (actorWeight: string) {

                                    actors[i].weight = Number(actorWeight);

                                    rl.question("¿Cuánto mide (cm)? ", function (actorHeight: string) {

                                        actors[i].height = Number(actorHeight);

                                        rl.question("¿De qué color tiene el pelo? ", function (actorHairColor: string) {

                                            actors[i].hairColor = actorHairColor;

                                            rl.question("¿De qué color tiene los ojos? ", function (actorEyeColor: string) {

                                                actors[i].eyeColor = actorEyeColor;

                                                rl.question("¿De qué raza es? ", function (actorRace: string) {

                                                    actors[i].race = actorRace;

                                                    rl.question("¿Está retirado (true o false)? ", function (actorIsRetired: string) {

                                                        if (actorIsRetired == "true" || actorIsRetired == "True") {
                                                            actors[i].isRetired = true;
                                                        } else {
                                                            actors[i].isRetired = false;
                                                        }

                                                        rl.question("¿De qué nacionalidad es? ", function (actorNationality: string) {

                                                            actors[i].nationality = actorNationality;

                                                            rl.question("¿Cuántos premios Oscar ha ganado? ", function (actorOscars: string) {

                                                                actors[i].oscarsNumber = Number(actorOscars);

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

                }

            }),

            rl.question("¿De qué país es la película? ", function (nationality: string) {



                rl.question("¿Cómo se llama el director? ", function (directorName: string) {

                        director.name = directorName;

                        rl.question("¿Cuantos años tiene? ", function (directorAge: string) {

                            director.age = Number(directorAge);

                            rl.question("¿Es hombre o mujer? ", function (directorGenre: string) {

                                if (directorGenre == "Mujer" || directorGenre == "mujer") {
                                    director.profession = "Directora";
                                    director.genre = "Mujer";
                                } else {
                                    director.profession = "Director";
                                    director.genre = "Hombre";
                                }

                                rl.question("¿Cuánto pesa (kg)? ", function (directorWeight: string) {

                                    director.weight = Number(directorWeight);

                                    rl.question("¿Cuánto mide (cm)? ", function (directorHeight: string) {

                                        director.height = Number(directorHeight);

                                        rl.question("¿De qué color tiene el pelo? ", function (directorHairColor: string) {

                                            director.hairColor = directorHairColor;

                                            rl.question("¿De qué color tiene los ojos? ", function (directorEyeColor: string) {

                                                director.eyeColor = directorEyeColor;

                                                rl.question("¿De qué raza es? ", function (directorRace: string) {

                                                    director.race = directorRace;

                                                    rl.question("¿Está retirado (true o false)? ", function (directorIsRetired: string) {

                                                        if (directorIsRetired == "true" || directorIsRetired == "True") {
                                                            director.isRetired = true;
                                                        } else {
                                                            director.isRetired = false;
                                                        }

                                                        rl.question("¿De qué nacionalidad es? ", function (directorNationality: string) {

                                                            director.nationality = directorNationality;

                                                            rl.question("¿Cuántos premios Oscar ha ganado? ", function (directorOscars: string) {

                                                                director.oscarsNumber = Number(directorOscars);

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

                    }),

                    rl.question("¿Cómo se llama el guionista? ", function (writerName: string) {

                        writer.name = writerName;

                        rl.question("¿Cuantos años tiene? ", function (writerAge: string) {

                            writer.age = Number(writerAge);

                            rl.question("¿Es hombre o mujer? ", function (writerGenre: string) {

                                if (writerGenre == "Mujer" || writerGenre == "mujer") {

                                    writer.genre = "Mujer";

                                } else {

                                    writer.genre = "Hombre";
                                }

                                writer.profession = "Guionista";

                                rl.question("¿Cuánto pesa (kg)? ", function (writerWeight: string) {

                                    writer.weight = Number(writerWeight);

                                    rl.question("¿Cuánto mide (cm)? ", function (writerHeight: string) {

                                        writer.height = Number(writerHeight);

                                        rl.question("¿De qué color tiene el pelo? ", function (writerHairColor: string) {

                                            writer.hairColor = writerHairColor;

                                            rl.question("¿De qué color tiene los ojos? ", function (writerEyeColor: string) {

                                                writer.eyeColor = writerEyeColor;

                                                rl.question("¿De qué raza es? ", function (writerRace: string) {

                                                    writer.race = writerRace;

                                                    rl.question("¿Está retirado (true o false)? ", function (writerIsRetired: string) {

                                                        if (writerIsRetired == "true" || writerIsRetired == "True") {
                                                            writer.isRetired = true;
                                                        } else {
                                                            writer.isRetired = false;
                                                        }

                                                        rl.question("¿De qué nacionalidad es? ", function (writerNationality: string) {

                                                            writer.nationality = writerNationality;

                                                            rl.question("¿Cuántos premios Oscar ha ganado? ", function (writerOscars: string) {

                                                                writer.oscarsNumber = Number(writerOscars);

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

                rl.question("¿En que idioma se grabó? ", function (language: string) {

                    rl.question("¿En qué plataforma se estrenó? ", function (platform: string) {

                        rl.question("¿Pertenece al Universo Cinematográfico de Marvel? ", function (isMCU: string) {

                            rl.question("¿Cómo se llama el personaje protagonista? ", function (mainCharacterName: string) {

                                rl.question("¿Cómo se llama el productor? ", function (producerName: string) {

                                        producer.name = producerName;

                                        rl.question("¿Cuantos años tiene? ", function (producerAge: string) {

                                            producer.age = Number(producerAge);

                                            rl.question("¿Es hombre o mujer? ", function (producerGenre: string) {

                                                if (producerGenre == "Mujer" || producerGenre == "mujer") {
                                                    producer.profession = "Productora";
                                                    producer.genre = "Mujer";
                                                } else {
                                                    producer.profession = "Productor";
                                                    producer.genre = "Hombre";
                                                }

                                                rl.question("¿Cuánto pesa (kg)? ", function (producerWeight: string) {

                                                    producer.weight = Number(producerWeight);

                                                    rl.question("¿Cuánto mide (cm)? ", function (producerHeight: string) {

                                                        producer.height = Number(producerHeight);

                                                        rl.question("¿De qué color tiene el pelo? ", function (producerHairColor: string) {

                                                            producer.hairColor = producerHairColor;

                                                            rl.question("¿De qué color tiene los ojos? ", function (producerEyeColor: string) {

                                                                producer.eyeColor = producerEyeColor;

                                                                rl.question("¿De qué raza es? ", function (producerRace: string) {

                                                                    producer.race = producerRace;

                                                                    rl.question("¿Está retirado (true o false)? ", function (producerIsRetired: string) {

                                                                        if (producerIsRetired == "true" || producerIsRetired == "True") {
                                                                            producer.isRetired = true;
                                                                        } else {
                                                                            producer.isRetired = false;
                                                                        }

                                                                        rl.question("¿De qué nacionalidad es? ", function (producerNationality: string) {

                                                                            producer.nationality = producerNationality;

                                                                            rl.question("¿Cuántos premios Oscar ha ganado? ", function (producerOscars: string) {

                                                                                producer.oscarsNumber = Number(producerOscars);

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

                                    }),

                                    rl.question("¿Quién la distribuye? ", function (distributor: string) {

                                        rl.question("¿De qué género es? ", function (genre: string) {

                                            movieN.setTitle(title);
                                            movieN.setReleaseYear(Number(releaseYear));
                                            // movieN.setActors(actors);
                                            movieN.setNationality(nationality);
                                            // movieN.setDirector(director);
                                            // movieN.setWriter(writer);
                                            movieN.setLanguage(language);
                                            movieN.setPlatform(platform);
                                            if (isMCU == "true" || isMCU == "True") {
                                                movieN.setIsMCU(true);
                                            } else {
                                                movieN.setIsMCU(false);
                                            }
                                            movieN.setMainCharacterName(mainCharacterName);
                                            // movieN.setProducer(producer);
                                            movieN.setDistributor(distributor);
                                            movieN.setGenre(genre);
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





rl.on("close", function () {
    let movie1 : Movie = new Movie ("El señor de los ganchitos", 2002, "Española", "Aventura");
    let movie2 : Movie = new Movie ("pelicula2", 2015, "Española", "Aventura");
    let movie3 : Movie = new Movie ("pelicula3", 2020, "Española", "Aventura");

    let prueba = new Imdb ([movie1, movie2, movie3]);
    console.log(movieN.showProperties());

    const fs = require("fs");

    let imdb = new Imdb (JSON.parse(fs.readFileSync(`superfichero.json`)));

    imdb.movies.unshift(movieN);

    console.log(imdb);

    imdb.escribirEnFicheroJSON("superfichero");

    
       
    process.exit(0);

});