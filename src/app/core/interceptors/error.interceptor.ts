import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _AuthService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>> {
    const localToken = localStorage.getItem('eToken')
    request = request.clone({headers:request.headers.set('Authorization', 'Bearer ' + localToken)})
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error.status === 401||error.status === 403){
          this._AuthService.refreshToken().subscribe({
            next:(response)=>{
              localStorage.removeItem('eToken')
              localStorage.setItem('eToken',response.id_token)
            },error:(err) => {
              console.log(err)
            }
          })
        }
        throw error
      })
    );
  }
}