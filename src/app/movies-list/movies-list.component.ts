import { Component, OnInit } from "@angular/core";
import { createSelector, Store, select } from "@ngrx/store";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AppState } from "../state/reducers.js";
import { Movie } from "../movie-details/movie-detail.model.js";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.sass"]
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {
    this.movies$ = store.pipe(
      select("movies"),
      map(state => state.movies)
    );
  }

  ngOnInit() {
    // this.getMovies()
  }

  getMovies() {
    // this.moviesService.getMovies()
    //   .subscribe(movies => this.movies = movies)
  }
}
