import { Component, OnInit } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { AppState } from "../state/reducers";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

import { Movie, GenreType } from "../movie-details/movie-detail.model";
import { searchMovies, filterMovies } from "../state/actions";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  movies: Array<Movie>;
  searchQuery$: Observable<string>;
  genres: [string, string][];

  constructor(private store: Store<AppState>) {
    this.searchQuery$ = store.pipe(
      select("movies"),
      select("query"),
      take(1)
    );

    this.genres = Object.entries(GenreType);
  }

  ngOnInit() {}

  search(event: any) {
    const query = event.target.value;
    this.store.dispatch(searchMovies({ query }));
  }

  filter(event: any) {
    const genre = event.target.value;
    this.store.dispatch(filterMovies({ genre }));
  }
}
