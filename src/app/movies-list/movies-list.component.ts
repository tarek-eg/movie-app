import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service.js';
import {MovieDetail} from "../movie-details/movie-detail.model"

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {

  movies: Array<MovieDetail>

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies()
  }

  getMovies(){
    this.moviesService.getMovies()
      .subscribe(movies => this.movies = movies)
     
    console.log(this.movies)
  }


}
