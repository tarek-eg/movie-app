import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  { path: "movies", component: MoviesListComponent },
  { path: "movies/:id", component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
