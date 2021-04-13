import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { LISTPOKEMONS } from '../donnees-pokemons/mock-pokemons';

import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-list-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private route: Router) {
    this.pokemons = [];
   }

  ngOnInit(): void {
    this.pokemons = LISTPOKEMONS;

  }

  // tslint:disable-next-line:typedef
  selectedPokemon(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.route.navigate(link);
  }

}
