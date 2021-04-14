import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';


import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../pokemon.service';


@Component({
  selector: 'app-list-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private route: Router, private pokemonService: PokemonService) {
    this.pokemons = [];
   }

  ngOnInit(): void {
   this.pokemonService.getPokemons()
     .subscribe(pokemons => {
       this.pokemons = pokemons;
     });

  }

  // tslint:disable-next-line:typedef
  selectedPokemon(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.route.navigate(link);
  }

}
