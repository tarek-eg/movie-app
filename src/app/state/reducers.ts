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
  query: string;
  genre: string;
}

const initialState: AppState = {
  movies: MOVIES,
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
