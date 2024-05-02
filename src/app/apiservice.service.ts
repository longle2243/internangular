import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  apiurl = "https://jsonplaceholder.typicode.com/todos";

  getData(): Observable<any>{
    return this.http.get<any>(this.apiurl);
  }
}
