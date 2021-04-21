import { Movie } from './movie';
const fs = require("fs");

export class Imdb {
    public movies: Array<Movie>;

    constructor(movies: Array<Movie>) {
        this.movies = movies;
    }

    public escribirEnFicheroJSON(nombreDelFichero : string){

        fs.writeFileSync(`${nombreDelFichero}.json`, JSON.stringify(this));

    }

    public obtenerInstanciaIMDB(nombreFichero : string) : Imdb {

        let lista = JSON.parse(fs.readFileSync(`${nombreFichero}.json`))
        
        return lista;

    }
}