import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(private router: Router){}
  intercept(
    req: HttpRequest<User>,
    next: HttpHandler
  ): Observable<HttpEvent<HttpResponse<User>>> {
    
    const token = localStorage.getItem('token');

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
      console.log('visited INTERCETOR: ');

      return next.handle(cloned);

      // return next.handle(cloned).pipe(
      //   catchError((error: any) => {
      //     if (error.status == 401 || error.status == 0) {
      //       this.router.navigate(['/'])
      //     } 
      //     return error
      //   }),
      // );
    }
    return next.handle(req);
  }
}
