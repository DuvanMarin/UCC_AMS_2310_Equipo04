import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './Components/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './Components/character/character.component';

@NgModule({
  declarations: [AppComponent, CharactersComponent, CharacterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
