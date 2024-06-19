import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = "https://midcare-v1-0-5.onrender.com/"
  hospitalApi():Observable<any>{
    return this._HttpClient.get( this.baseUrl + 'user/hospital/getAll')
  }

  blogApi():Observable<any>{
    return this._HttpClient.get( this.baseUrl + 'user/blog/getAll')
  }

  insightApi():Observable<any>{
    return this._HttpClient.get( this.baseUrl + 'user/insight/getAll')
  }
  emergencyApi():Observable<any>{
    return this._HttpClient.get( this.baseUrl + 'emergency/getAll')
  }
  bloodBagApi():Observable<any>{
    return this._HttpClient.get( this.baseUrl + 'user/bag/getAll')
  }
}
