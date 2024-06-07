import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '@app/config/api.url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeapiService {
  url = API_URLS.fakeUsers;

  constructor(private http: HttpClient) {}

  fake(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
