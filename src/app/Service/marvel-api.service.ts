import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelAPIService {
  TIMESTAMP = 1;
  PUBLIC_KEY = '2dc2cd91d9a820fe5004bf92699210e2';
  HASH = '693e9af84d3dfcc71e640e005bdc5e2e';
  URL_API = `https://gateway.marvel.com:443/v1/public/events?ts=${this.TIMESTAMP}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  getAllevents(): Observable<any> {
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
