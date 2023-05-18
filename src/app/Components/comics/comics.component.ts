import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsService } from 'src/app/Service/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  constructor(private comicsService: ComicsService) {}

  allComics: Observable<any> | undefined;

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.allComics = this.comicsService.getComics();
  }
}
