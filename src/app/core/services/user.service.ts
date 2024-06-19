import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string = "http://localhost:8081"

  constructor(private _HttpClient:HttpClient) {}

  userApi():Observable<any>{
    return this._HttpClient.get(this.baseUrl + '/user/get')
  }

  updateUser(userDetails:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + '/user/update' , userDetails )
  }

  uploadImage(imageData: FormData):Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this._HttpClient.post(this.baseUrl + `/user/profile/image`, imageData, { headers });
  }
}
