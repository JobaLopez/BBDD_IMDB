import { Imdb } from './imdb';
import { Movie } from './movie';
import { Professional } from './professional';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let movieN : Movie = new Movie("", 0, "", "");

rl.question("¿Cuál es el título de la película? ", function(title : string) {

    rl.question("¿En qué año se estrenó? ", function(releaseYear : number) {

        rl.question("¿Quiénes son los actores? ", function(actors : Professional[]) {

            rl.question("¿De qué país es la película? ", function(nationality : string) {

                rl.question("¿Quién la dirigió? ", function(director: Professional) {
            
                    rl.question("¿Quién escribió el guion? ", function(writer : Professional) {
        
                        rl.question("¿En que idioma se grabó? ", function(language : string) {

                            rl.question("¿En qué plataforma se estrenó? ", function(platform : string) {

                                rl.question("¿Pertenece al Universo Cinematográfico de Marvel? ", function(isMCU : boolean) {

                                    rl.question("¿Cómo se llama el personaje protagonista? ", function(mainCharacterName : string) {

                                        rl.question("¿Quién la produjo? ", function(producer : Professional) {

                                            rl.question("¿Quién la distribuye? ", function(distributor : string) {

                                                rl.question("¿De qué género es? ", function(genre : string) {

                                                    movieN.setTitle(title);
                                                    movieN.setReleaseYear(releaseYear);
                                                    movieN.setActors(actors);
                                                    movieN.setNationality(nationality);
                                                    movieN.setDirector(director);
                                                    movieN.setWriter(writer);
                                                    movieN.setLanguage(language);
                                                    movieN.setPlatform(platform);
                                                    movieN.setIsMCU(isMCU);
                                                    movieN.setMainCharacterName(mainCharacterName);
                                                    movieN.setProducer(producer);
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
        
            });
    
        });

    });

});

rl.on("close", function() {

    console.log(movieN.showProperties());
    process.exit(0);

});