import MOVIES from "../movie.mock-data.json";
import {
  MoviesSearchActionsUnion,
  FindMoviesPageActionsUnion,
  searchMovies
} from "./actions";
import { Movie } from "../movie-details/movie-detail.model";

export interface AppState {
  movies: Movie[];
  selectedMovie: Movie | null;
  query: string;
}

const initialState: AppState = {
  movies: MOVIES,
  selectedMovie: null,
  query: ""
};

function reducer(
  state = initialState,
  action: MoviesSearchActionsUnion | FindMoviesPageActionsUnion
): AppState {
  switch (action.type) {
    case searchMovies.type: {
      const { query } = action;
      if (query === "") {
        return {
          ...state,
          movies: MOVIES,
          query
        };
      }

      return {
        ...state,
        movies: MOVIES.filter(movie =>
          movie.name.toLowerCase().includes(query)
        ),
        query
      };
    }
    default: {
      return state;
    }
  }
}

export const reducers = {
  movies: reducer
};
