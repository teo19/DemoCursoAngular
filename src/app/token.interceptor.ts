import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'kzhjkzhkcjhzkxjhvkjzxhvkjxchb';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8'
    });

    const reqClone = request.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(errorResponse: HttpErrorResponse) {
    console.error(errorResponse);
    if(errorResponse.error && errorResponse.error.error) {
      return throwError(()=> { errorResponse.error})
    } else {
      return throwError(()=> { errorResponse})
    }
  }
}
