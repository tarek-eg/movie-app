import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie-details/movie-detail.model";
import { searchMovies } from "../state/actions";
import { Store, select } from "@ngrx/store";
import { AppState } from "../state/reducers";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-header",
  template: `
    <nav class="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvpgKU0srM-1h612oMwzFJp9GVflz3G0qH4xxb2j-i-HXLPvE"
      />
      <input
        (keyup)="search($event)"
        type="text"
        placeholder="Quick Search..."
      />
    </nav>
  `,
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  movies: Array<Movie>;
  searchQuery$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.searchQuery$ = store.pipe(
      select("movies"),
      select("query"),
      take(1)
    );
  }

  ngOnInit() {}

  search(event: any) {
    const query = event.target.value;
    this.store.dispatch(searchMovies({ query }));
  }
}
