import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '@app/interfaces/user.interface';
import { Token } from '@app/interfaces/token.interface';
import { API_URLS } from '@app/config/api.url';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = API_URLS.auth;
  constructor(
    public jwtHelper: JwtHelperService,
    private http: HttpClient
  ) {}

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + '/login', user).pipe(
      tap(res => {
        if (res && res.access_token) {
          localStorage.setItem('token', res.access_token);
        }
      })
    );
  }

  public isAuthenticated() {
    if (typeof localStorage !== 'undefined') {
      const token = this.getToken();
      this.isTokenExpired();
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isTokenExpired() {
    const token = this.getToken();
    if (this.jwtHelper.isTokenExpired(token)) {
      this.logout();
    }
  }
}
