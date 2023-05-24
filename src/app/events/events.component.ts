import { Component } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  constructor(private eventSvc: MarvelAPIService) {}
  allEvents: Observable<any> | undefined;

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.allEvents = this.eventSvc.getAllevents();
  }
}
