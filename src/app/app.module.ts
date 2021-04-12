import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PokemonsComponent} from './pokemons/list-pokemons/pokemons.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './pokemons/directives/border-card.directive';

@NgModule({
  declarations: [
    PokemonsComponent,
    PageNotFoundComponent,
    PokemonTypeColorPipe,
    AppComponent,
    PokemonTypeColorPipe,
    BorderCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
