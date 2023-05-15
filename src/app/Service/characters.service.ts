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
  getCharacters() {
    const cachedData = localStorage.getItem('cachedData');
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    return this.http
      .get(this.API_URL)
      .toPromise()
      .then((response) => {
        localStorage.setItem('cachedData', JSON.stringify(response));
        return response;
      });
  }
}
