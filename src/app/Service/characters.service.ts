import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private API_URL =
    'https://mf-characters.s3.amazonaws.com/result_7fd7811c-680d-4b91-a879-17b4ce53967a.json';

  constructor(private http: HttpClient) {}
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
