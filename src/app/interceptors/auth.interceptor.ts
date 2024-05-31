import {
  HttpErrorResponse,
  HttpInterceptorFn,
  // HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { popUpFailed } from '@app/functions/popup-function';
// import { AuthService } from '@app/services/auth.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  const rftoken = localStorage.getItem('resfreshtoken');
  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });

    return next(cloned).pipe(
      // FAKE API FOR TEST
      // tap(res => {
      //   if (res instanceof HttpResponse) {
      //     if (res.url === 'https://dummyjson.com/users/1') {
      //       // console.log(res);
      //       localStorage.removeItem('token');
      //       // authSV.isAuthenticated();
      //       router.navigate(['/login']);
      //     }
      //   }
      // }),
      catchError((err: HttpErrorResponse) => {
        console.log('Visited Interceptor');
        // handleHttpError(err);
        if (err) {
          switch (err.status) {
            case 400:
              console.log('Bad Request');
              break;
            case 401:
              if (rftoken) {
                console.log('Call API to get new access token');
              }
              break;
            case 403:
              console.log('Forbidden');
              break;
            case 404:
              console.log('Not Found!');
              popUpFailed('Not Found!').then(() => {
                router.navigateByUrl('/private/exercises/question/list');
              });
              break;
            case 500:
              console.log('Internal Server Error');
              break;
            default:
              console.log('Unauthorized');
              localStorage.removeItem('token');
              router.navigate(['/login']);
              break;
          }
        }
        return throwError(() => err);
      })
    );
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // handleHttpError(err);
      return throwError(() => err);
    })
  );
};

// function handleHttpError(err: HttpErrorResponse) {
//   const router = inject(Router);
//   const rftoken = localStorage.getItem('resfreshtoken');
//   if (err) {
//     switch (err.status) {
//       case 400:
//         console.log('Bad Request');
//         break;
//       case 401:
//         if (rftoken) {
//           console.log('Call API to get new access token');
//         }
//         break;
//       case 403:
//         console.log('Forbidden');
//         break;
//       case 404:
//         console.log('Not Found!');
//         popUpFailed('Not Found!');
//         break;
//       case 500:
//         console.log('Internal Server Error');
//         break;
//       default:
//         console.log('Unauthorized');
//         localStorage.removeItem('token');
//         router.navigate(['/login']);
//         break;
//     }
//   }
// }
