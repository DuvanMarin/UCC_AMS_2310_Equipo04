import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/Service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  data: any;

  characters: any[] | undefined;
  constructor(private charactersService: CharactersService) {}
  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters() {
    this.charactersService
      .getCharacters()
      .then((response) => {
        this.characters = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
