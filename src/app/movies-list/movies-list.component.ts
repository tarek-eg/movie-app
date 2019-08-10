import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

import { AppState, getSearchQuery } from "../state/reducers.js";
import { Movie } from "../movie-details/movie-detail.model.js";
import { searchMovies } from "../state/actions.js";

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
    this.getMovies("");
  }

  getMovies(query: string) {
    this.store.dispatch(searchMovies({ query }));
  }
}
