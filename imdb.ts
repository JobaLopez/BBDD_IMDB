import { Movie } from './movie';

export class Imdb {
    public movies: Array<Movie>;

    constructor(movies: Array<Movie>) {
        this.movies = movies;
    }
    escribirEnFicheroJSON(nombreFichero: string) {
        const fs = require("fs");
        let imdbJSON = JSON.stringify(this.movies);
        fs.writeFileSync(nombreFichero, imdbJSON);
    }

    obtenerInstaciaIMDB(nombreFichero: string): Imdb {
        const fs = require("fs");
        return JSON.parse(fs.readFileSync(nombreFichero));
    }

}