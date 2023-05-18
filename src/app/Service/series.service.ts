import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  API_URL =
    'https://3ledt3uv436syvqjoiocb6wpcy0arofv.lambda-url.us-east-1.on.aws/';
  constructor(private http: HttpClient) {}

  getSeries(): Observable<any> {
    return this.http
      .get(this.API_URL)
      .pipe(map((data: any) => data.data.results));
  }
}
