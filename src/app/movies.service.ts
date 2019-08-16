import { Injectable } from "@angular/core";
import { Observable, of, from } from "rxjs";

import MOVIES from "./movie.mock-data.json";
import { Movie } from "./movie-details/movie-detail.model.js";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor() {}

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getMovie(id: number): Observable<Movie> {
    return from(MOVIES.filter(movie => movie.id === id));
  }

  search(query: string) {
    return of(MOVIES.filter(movie => movie.name.toLowerCase().includes(query)));
  }
}
