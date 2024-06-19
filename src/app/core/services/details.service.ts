import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService{

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string = "https://midcare-v1-0-5.onrender.com"

  displayEmergencyDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl + `/emergency/get?id=${id}`)
  }

  displayHospitalDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl + `/user/hospital/get?id=${id}`)
  }

  displayBlogDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl + `/user/blog/get?id=${id}`)
  }

  displayInsightDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl + `/user/insight/get?id=${id}`)
  }
}
