import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoriesService } from 'src/app/Service/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  constructor(private storiesService: StoriesService) {}

  allStories: Observable<any> | undefined;

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.allStories = this.storiesService.getStories();
  }
}
