import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private cachedDataKey = 'cachedData';
  constructor(private http: HttpClient) {}

  getCharacters(): Promise<any> {
    const cachedData = localStorage.getItem(this.cachedDataKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    const API_URL =
      'https://lgvu3fqtzgdltmllcyt6342qn40cqxjn.lambda-url.us-east-1.on.aws/';
    return this.http
      .get(API_URL)
      .toPromise()
      .then((response) => {
        localStorage.setItem(this.cachedDataKey, JSON.stringify(response));
        return response;
      });
  }
}
