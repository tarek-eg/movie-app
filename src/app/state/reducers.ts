import MOVIES from "../movie.mock-data.json";
import {
  FindMoviesPageActions,
  searchMovies,
  FilterMoviesPageActions,
  filterMovies
} from "./actions";
import { Movie } from "../movie-details/movie-detail.model";

export interface AppState {
  movies: Movie[];
  selectedMovie: Movie | null;
  query: string;
  genre: string;
}

const initialState: AppState = {
  movies: MOVIES,
  selectedMovie: null,
  query: "",
  genre: ""
};

function reducer(
  state = initialState,
  action: FindMoviesPageActions | FilterMoviesPageActions
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
    case filterMovies.type: {
      const { genre } = action;
      if (genre === "") {
        return {
          ...state,
          movies: MOVIES,
          genre
        };
      }

      return {
        ...state,
        movies: MOVIES.filter(movie => movie.genres.includes(genre)),
        genre
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
