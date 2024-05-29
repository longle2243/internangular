import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user.interface";

@Injectable()
export class authInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<User>, next: HttpHandler): Observable<HttpEvent<HttpResponse<User>>> {
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