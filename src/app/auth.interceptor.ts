// import { HttpInterceptorFn } from '@angular/common/http';
// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     // const cloned = req.clone({
//     //   setHeaders: {
//     //     authorization: token,
//     //   },
//     // });
//     const cloned = req.clone({
//       headers: req.headers.set("Authorization", "Bearer " + token)
//     });
//     return next(cloned);
//   }
//   return next(req);
// };

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class authInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      });
      console.log("visited INTERCETOR: ");

      return next.handle(cloned);
    }
    return next.handle(req)
  }
}