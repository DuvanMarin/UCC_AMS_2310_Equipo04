import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})

export class ComicComponent {
  @Input() comic: any;
  constructor() {}
  ngOnInit(): void {}
}
