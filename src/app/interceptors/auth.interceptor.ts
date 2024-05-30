import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '@app/services/auth.service';
import { catchError, tap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  // const authSV = inject(AuthService);


  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });

    return next(cloned).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          if (res.url === "https://dummyjson.com/users/1") {
            // console.log(res);
            localStorage.removeItem("token")
            // authSV.isAuthenticated();
            router.navigate(['/login']);
          }
        }
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          // Call Resfresh Token
          localStorage.removeItem("token")
          router.navigate(['/login']);
        }
        return throwError(() => err);
      })
    );
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        router.navigate(['/login']);
      }
      return throwError(() => err);
    })
  );
};
