import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService implements HttpInterceptor {

  constructor(private route:Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error)=>{
      if (error instanceof HttpErrorResponse &&
        error.status >=500) {
        this.route.navigateByUrl('/error');
    }
    return throwError(error.message);
    })
    );
  }

}
