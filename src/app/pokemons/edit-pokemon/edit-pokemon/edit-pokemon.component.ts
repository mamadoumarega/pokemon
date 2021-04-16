import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../../donnees-pokemons/pokemon';
import {PokemonService} from '../../pokemon.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {
  }
}
@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemons: Pokemon[];
  pokemon: any = null;
  selectedFile: ImageSnippet;
  file: File;

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
  // tslint:disable-next-line:typedef
  onImagePicked(image: any) {
    this.file = image.files[0].name;
    console.log(this.file);
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, this.file);
      this.pokemonService.uploadFile(this.selectedFile.file);
      reader.readAsDataURL(this.file);
      this.pokemon.picture = this.file;
    });
  }
}
