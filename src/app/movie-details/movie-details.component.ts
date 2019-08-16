import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { MoviesService } from "../movies.service";
import { Movie } from "./movie-detail.model";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.sass"]
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.moviesService.getMovie(id).subscribe(movie => (this.movie = movie));
  }
}
