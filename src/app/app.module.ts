import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ComicsComponent } from './Components/comics/comics.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicComponent } from './Components/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ComicsComponent,
    ComicComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
