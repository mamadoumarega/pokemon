import {Component, Input, OnInit} from '@angular/core';
import { Pokemon } from '../../donnees-pokemons/pokemon';

import { ActivatedRoute, Router } from '@angular/router';
import {PokemonService} from '../../pokemon.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-pokemon',
  templateUrl: './form-pokemon.component.html'
})

export class FormPokemonComponent implements OnInit {

  types: any = [];
  @Input() pokemon: any;
  selectedFile: ImageSnippet;
  file: File;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
  }
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonsTypes();
  }

  goBack(pokemon: Pokemon): void {
    this.pokemonService.goBack(this.pokemon);
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    return !(this.pokemon.types.length >= 3 && !this.hasType(type));
  }

  hasType(type: string): boolean {
    const index = this.pokemon.types.indexOf(type);
    return index > -1;
  }

  selectType($event: any, type: string): void {
    const checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }
  // tslint:disable-next-line:typedef
  onImagePicked(image: any) {
    console.log(image);
    this.file = image.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, this.file);
      this.pokemonService.uploadFile(this.selectedFile.file);
      reader.readAsDataURL(this.file);
    });
  }


  onSubmit(): void {
   this.pokemonService.updatePokemon(this.pokemon)
     .subscribe(() =>  this.goBack(this.pokemon))
   ;
  }
}
