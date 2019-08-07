import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import MOVIES from "../content/movie.mock-data.json";
import { MovieDetail } from './movie-details/movie-detail.model.js';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): Observable<MovieDetail[]> {
    return of(MOVIES);
  }

  getMovie(id: number): Observable<MovieDetail>{

    return from(MOVIES.filter(movie => movie.id === id))

  }
}
