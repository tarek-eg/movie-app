import { createAction, props } from "@ngrx/store";

import { GenreType } from "../movie-details/movie-detail.model";

export const searchMovies = createAction(
  "[Movies List Page] Search Movies",
  props<{ query: string }>()
);
export const filterMovies = createAction(
  "[Movies List Page] Filter Movies",
  props<{ genre: string }>()
);

export const selectMovie = createAction(
  "[View Movie Page] Select Movie",
  props<{ id: string }>()
);

export type ViewMoviePageActions = ReturnType<typeof selectMovie>;

export type FindMoviesPageActions = ReturnType<typeof searchMovies>;

export type FilterMoviesPageActions = ReturnType<typeof filterMovies>;
