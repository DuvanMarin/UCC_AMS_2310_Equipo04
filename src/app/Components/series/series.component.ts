import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesService } from 'src/app/Service/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  constructor(private seriesService: SeriesService) {}
  allSeries: Observable<any> | undefined;

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.allSeries = this.seriesService.getSeries();
  }
}
