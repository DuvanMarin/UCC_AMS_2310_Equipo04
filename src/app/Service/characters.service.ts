import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private API_URL =
    'https://lgvu3fqtzgdltmllcyt6342qn40cqxjn.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
