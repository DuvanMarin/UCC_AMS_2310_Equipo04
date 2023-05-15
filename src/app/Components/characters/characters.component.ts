import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/Service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})

export class CharactersComponent implements OnInit {
  characters: any[] | undefined;
  constructor(private charactersService: CharactersService) {}
  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(
      (data: any) => {
        this.characters = data.data.results;
      },
      (error) => console.error(error)
    );
  }
}
