import MOVIES from "../movie.mock-data.json";
import {
  MoviesSearchActionsUnion,
  FindMoviesPageActionsUnion
} from "./actions";
import { Movie } from "../movie-details/movie-detail.model";

export interface AppState {
  movies: Movie[];
  selectedMovie: Movie | null;
}

const initialState: AppState = {
  movies: MOVIES,
  selectedMovie: null
};

function reducer(
  state = initialState,
  action: MoviesSearchActionsUnion | FindMoviesPageActionsUnion
): AppState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const reducers = {
  movies: reducer
};

export const getMovies = (state: AppState) => state.movies;
