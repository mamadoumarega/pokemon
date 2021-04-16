import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsComponent} from './list-pokemons/pokemons.component';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon/detail-pokemon.component';
import {EditPokemonComponent} from './edit-pokemon/edit-pokemon/edit-pokemon.component';
import {LoginComponent} from '../auth/login.component';

const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    children: [
      { path: 'all', component: PokemonsComponent },
      { path: ':id', component: DetailPokemonComponent},
      { path: 'edit/:id', component: EditPokemonComponent},
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
