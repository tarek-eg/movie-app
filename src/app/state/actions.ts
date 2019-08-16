import { createAction, props } from "@ngrx/store";

export const searchMovies = createAction(
  "[Movies List Page] Search Movies",
  props<{ query: string }>()
);

export const filterMovies = createAction(
  "[Movies List Page] Filter Movies",
  props<{ genre: string }>()
);

export type FindMoviesPageActions = ReturnType<typeof searchMovies>;

export type FilterMoviesPageActions = ReturnType<typeof filterMovies>;
