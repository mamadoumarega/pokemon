import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from '../app.component';
import {PokemonTypeColorPipe} from '../pipes/pokemon-type-color.pipe';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon/detail-pokemon.component';
import {EditPokemonComponent} from './edit-pokemon/edit-pokemon/edit-pokemon.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {FormPokemonComponent} from './edit-pokemon/edit-pokemon/form-pokemon.component';
import {BorderCardDirective} from './directives/border-card.directive';
import {PokemonsComponent} from './list-pokemons/pokemons.component';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    EditPokemonComponent,
    FormPokemonComponent,
    BorderCardDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    PokemonsRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: []
})
export class PokemonsModule { }
