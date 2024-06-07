import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '@app/config/api.url';
import { Question } from '@app/interfaces/question.interface';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  url = API_URLS.questions;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url);
  }

  getItem(id: number): Observable<Question> {
    return this.http.get<Question>(this.url + '/' + id);
  }

  deleteItem(id: number): Observable<HttpResponse<Question>> {
    return this.http.delete<Question>(this.url + '/' + id, {
      observe: 'response',
    });
  }

  create(data: Question): Observable<Question> {
    return this.http.post<Question>(this.url, data);
  }

  update(id: number, data: Question): Observable<HttpResponse<Question>> {
    return this.http.put<Question>(this.url + '/' + id, data, {
      observe: 'response',
    });
  }

}
