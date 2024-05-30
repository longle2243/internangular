import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeapiService {
  url = 'https://dummyjson.com/users/1';

  constructor(private http: HttpClient) {}

  fake(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
