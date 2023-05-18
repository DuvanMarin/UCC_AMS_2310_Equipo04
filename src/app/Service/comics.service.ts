import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  API_URL =
    'https://ildhstpj3czdecrrukorzfkgru0uelzk.lambda-url.us-east-1.on.aws/';
  constructor(private http: HttpClient) {}

  getComics(): Observable<any> {
    return this.http
      .get(this.API_URL)
      .pipe(map((data: any) => data.data.results));
  }
}
