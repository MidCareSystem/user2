import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor( private _HttpClient:HttpClient) {}

  baseUrl:string = "localhost:8081"

  register(userData:object):Observable<any>{
    return this._HttpClient.post( this.baseUrl + '/auth/signup' ,userData)
  }
}
