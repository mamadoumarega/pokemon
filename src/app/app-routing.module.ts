import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsComponent} from './pokemons/list-pokemons/pokemons.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {DetailPokemonComponent} from './pokemons/detail-pokemon/detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
  { path: 'pokemon/all', component: PokemonsComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
