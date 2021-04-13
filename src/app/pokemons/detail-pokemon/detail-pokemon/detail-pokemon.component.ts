import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../donnees-pokemons/pokemon';
import { LISTPOKEMONS } from '../../donnees-pokemons/mock-pokemons';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[];
  pokemon: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.pokemons = LISTPOKEMONS;
    const id = +this.route.snapshot.params.id;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.pokemons.length; i++) {
      this.pokemon = this.pokemons[i];
    }
  }

}
