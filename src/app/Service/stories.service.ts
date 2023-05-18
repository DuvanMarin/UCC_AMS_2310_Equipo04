import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  API_URL =
    'https://n6vxe67no5n53f3z7uzte2mfzy0hychx.lambda-url.us-east-1.on.aws/';
  constructor(private http: HttpClient) {}

  getStories(): Observable<any> {
    return this.http
      .get(this.API_URL)
      .pipe(map((data: any) => data.data.results));
  }
}
