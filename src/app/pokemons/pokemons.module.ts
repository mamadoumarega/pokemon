import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PokemonTypeColorPipe} from '../pipes/pokemon-type-color.pipe';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon/detail-pokemon.component';
import {EditPokemonComponent} from './edit-pokemon/edit-pokemon/edit-pokemon.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {FormPokemonComponent} from './edit-pokemon/edit-pokemon/form-pokemon.component';
import {BorderCardDirective} from './directives/border-card.directive';
import {PokemonsComponent} from './list-pokemons/pokemons.component';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonService } from './pokemon.service';
import {LoaderComponent} from '../loader/loader.component';
import {PokemonFilterPipe} from '../pipes/pokemon-filter.pipe';
import {SearchPokemonComponent} from './search-pokemon/search-pokemon.component';



@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonTypeColorPipe,
    PokemonFilterPipe,
    DetailPokemonComponent,
    LoaderComponent,
    SearchPokemonComponent,
    EditPokemonComponent,
    FormPokemonComponent,
    LoaderComponent,
    BorderCardDirective
  ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        PokemonsRoutingModule,
    ],
  providers: [PokemonService],
  bootstrap: []
})
export class PokemonsModule { }
