import { createAction, props,union } from '@ngrx/store';
import { Movie } from "../movie-details/movie-detail.model"


export const searchSuccess = createAction(
    '[Movies/API] Search Success',
    props<{ movies: Movie[] }>()
  );
  
  export const searchFailure = createAction(
    '[Movies/API] Search Failure',
    props<{ errorMsg: string }>()
  );


export const loadMovies = createAction(
  '[Movies Component] Load Movies',
  props<{ movies: Movie[] }>()
);

export const searchMovies = createAction(
    '[Find Movies Page] Search Movies',
    props<{ query: string }>()
  );

  export const selectMovie = createAction(
    '[View Movie Page] Select Movie',
    props<{ id: string }>()
  );
  
const all = union({ searchSuccess, searchFailure });

  
export type ViewMoviePageActionsUnion = ReturnType<typeof selectMovie>;

export type MoviesSearchActionsUnion = typeof all;

export type MoviesActionsUnion = ReturnType<typeof loadMovies>;

export type FindMoviesPageActionsUnion = ReturnType<typeof searchMovies>;
