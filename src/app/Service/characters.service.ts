import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  API_URL =
    'https://lgvu3fqtzgdltmllcyt6342qn40cqxjn.lambda-url.us-east-1.on.aws/';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(this.API_URL).pipe(
      map((data: any) => {
        data.data.results;
      })
    );
  }
}
