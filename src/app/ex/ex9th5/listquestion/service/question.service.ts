import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  urlapi = 'https://663d8989e1913c4767948d24.mockapi.io/api/v1/question';
  constructor(private http: HttpClient) { }
  getData(){
    console.log(this.http.get(this.urlapi));
    return this.http.get(this.urlapi);
  }
}
