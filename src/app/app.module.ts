import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './Components/series/series.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SeriesComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
