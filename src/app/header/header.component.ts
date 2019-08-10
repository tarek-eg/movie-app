import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service";
import { Movie } from "../movie-details/movie-detail.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  movies: Array<Movie>;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {}

  search(event: any) {}
}
