import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { reducers } from "./state/reducers";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ movies: reducers.movies }),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
