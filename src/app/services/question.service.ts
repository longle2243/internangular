import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url = 'https://6649bdcc4032b1331beeb174.mockapi.io/api/v1/questions';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url);
  }

  getItem(id: number): Observable<Question> {
    return this.http.get<Question>(this.url + '/' + id)
  }

  deleteItem(id: number): Observable<HttpResponse<Question>> {
    return this.http.delete<Question>(this.url + '/' + id, { observe: 'response' })
  }

  create(data: Question): Observable<Question> {
    return this.http.post<Question>(this.url, data);
  }

  update(id: number, data: Question): Observable<HttpResponse<Question>> {
    return this.http.put<Question>(this.url + '/' + id, data, {observe: 'response'})
  }
}
