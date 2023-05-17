import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/Service/characters.service';

@Component({
  selector: 'app-characters',
  template: `
    <div *ngIf="data">
      <h2>Nombres de los personajes:</h2>
      <ul>
        <li *ngFor="let character of data.results">
          {{ character.name }}
        </li>
      </ul>
    </div>
  `,
  providers: [CharactersService],
})
export class CharactersComponent implements OnInit {
  data: any;
  characters: any[] | undefined;
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(
      (response: any) => {
        const body = JSON.parse(response.body);
        this.data = body.data;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
