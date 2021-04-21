import { Movie } from './movie';

export class Imdb {
    public movies: Array<Movie>;

    constructor(movies: Array<Movie>) {
        this.movies = movies;
    }
}