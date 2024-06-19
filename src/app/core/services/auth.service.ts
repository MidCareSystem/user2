import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './../../components/login/login.component';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient) {}


  baseUrl:string = "https://midcare-v1-0-5.onrender.com"

  userInfo:any;

  register(userData:object):Observable<any>{
    return this._HttpClient.post( this.baseUrl + '/auth/signup' ,userData)
  }

  Login(userData2:object):Observable<any>{
    return this._HttpClient.post( this.baseUrl + '/auth/signin', userData2)
  }

  refreshToken():Observable<any>{
    let model:object = {
      grant_type:"refresh_token",
      refresh_token:localStorage.getItem('rToken')
    }
    return this._HttpClient.post( this.baseUrl + `/auth/refreshToken`, model)
  }
}
