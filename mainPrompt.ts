import { Professional } from './professional';
import { Movie } from './movie';


let pelicula4: Movie;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question("Titulo: ", function(title: string) {
    rl.question("Año de lanzamiento ", function(releaseYear: number) {
        rl.question("Actores: ", function(Actors: Professional[]) {
            rl.question("Nacionalidad: ", function(nacionality: string) {
                rl.question("Director: ", function(director: Professional) {
                    rl.question("Escritor: ", function(writer: Professional) {
                        rl.question("Idioma: ", function(language: string) {
                            rl.question("Plataforma: ", function(platform: string) {
                                rl.question("Es del Universo Marvel: ", function(isMCU: boolean) {
                                    rl.question("Personaje principal: ", function(mainCharacterName: string) {
                                        rl.question("Productor: ", function(producer: Professional) {
                                            rl.question("Distribuidor: ", function(distributor: string) {
                                               rl.question("Género: ", function(genre: string) {
                                                   pelicula4.setTitle(title);
                                                   pelicula4.setReleaseYear(releaseYear);

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


