import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class RestInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(this.addAuthToken(req))
      .pipe(
        tap(response => response),
        catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          console.log(error);
          return EMPTY;
        }

        return throwError(() => error);
      }));
  }

  private addAuthToken(req: HttpRequest<any>): HttpRequest<any>{
    const token = '';

    return req.clone({
      setHeaders:{
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        // Authorization: token,
      }
    });
  }
}
