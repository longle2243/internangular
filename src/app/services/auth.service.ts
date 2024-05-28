import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from "jwt-decode";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/auth';

    constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }

    test(): Observable<any> {
        return this.http.post<any>('http://localhost:3000/auth/login', { username: "long", password: "haha" })
            .pipe(tap((res) => {
                localStorage.setItem("token", res.access_token);
            }))
        // return this.http.post<any>('http://localhost:3000/auth/login', { username: "long", password: "haha" });
    }

    login(user: User): Observable<any> {
        //   return this.http.post<any>(`${this.apiUrl}/login`, user)
        return this.http.post<any>(this.apiUrl + "/login", user)
            .pipe(tap((res) => {
                if (res && res.access_token) {
                    localStorage.setItem("token", res.access_token);
                }
            }));
    }

    public isAuthenticated() {
        if (typeof localStorage !== 'undefined') {
            const token = this.getToken();
            this.isTokenExpired()
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

    isTokenExpired(){
        const token = this.getToken();
        if (this.jwtHelper.isTokenExpired(token)) {
            this.logout();
        }
    }
    // getDecodedToken(): any {
    //     const token = this.getToken();
    //     if (token) return jwtDecode(token);
    //     return null
    // }
}

