import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '@app/interfaces/subject.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  url = 'https://6649bdcc4032b1331beeb174.mockapi.io/api/v1/subjects';

  constructor(private http: HttpClient) {}

  getData(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url);
  }

  create(data: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.url, data);
  }
}
