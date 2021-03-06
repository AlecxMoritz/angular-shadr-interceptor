import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()

export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        const token = this.authService.getToken();

        if(token !== '') {
            request = request.clone({
                headers: request.headers.set('Authorization', token)
            })
        }

        request.clone({
            headers: request.headers.set('Content-Type', 'application/json')
        })

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if(event instanceof HttpResponse) {
                    console.log('Event =>', event);
                }
                
                return event;
            })
            
        )
    }
}