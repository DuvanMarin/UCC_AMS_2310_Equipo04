import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersService } from 'src/app/Service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private charactersService: CharactersService) {}

  allCharacters: Observable<any> | undefined ;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.charactersService.getCharacters();
  }
}
