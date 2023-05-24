import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
const md5 = require('md5');

@Injectable({
  providedIn: 'root',
})
export class MarvelAPIService {
  TIMESTAMP = 1;
  PUBLIC_KEY = '2dc2cd91d9a820fe5004bf92699210e2';
  PRIVATE_KEY = '727d781362cc74a7dd379917125dbc96cd981a99';
  HASH = generateHash(this.TIMESTAMP, this.PUBLIC_KEY, this.PRIVATE_KEY);
  URL_API = `https://gateway.marvel.com:443/v1/public/events?ts=${this.TIMESTAMP}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  getAllevents(): Observable<any> {
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
function generateHash(TIMESTAMP: any, PUBLIC_KEY: any, PRIVATE_KEY: any) {
  const data = TIMESTAMP + PUBLIC_KEY + PRIVATE_KEY;
  const hash = md5(data);
  return hash;
}
