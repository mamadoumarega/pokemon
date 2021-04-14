import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../../donnees-pokemons/pokemon';
import {PokemonService} from '../../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemons: Pokemon[];
  pokemon: any = null;


  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.pokemonService.getPokemon(id).subscribe(
      pokemon => {
        this.pokemon = pokemon ;
      })
    ;
  }

}
