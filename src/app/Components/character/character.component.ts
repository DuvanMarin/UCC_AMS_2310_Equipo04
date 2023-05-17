import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/Service/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  constructor(private characterService: CharactersService) {}
  allCharacters: Observable<any> | undefined;
  ngOnInit() {}
  getCharacters() {
    this.allCharacters = this.characterService.getCharacters();
  }
}
