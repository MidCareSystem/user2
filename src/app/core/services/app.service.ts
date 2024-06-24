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

  ticketApi():Observable<any>{
    return this._HttpClient.get(this.baseUrl + 'user/tickets/myTickets' )
  }

  transferTicket(id:string,email:string):Observable<any>{
    return this._HttpClient.put(this.baseUrl + `user/tickets/transfer?id=${id}&newOwnerEmail=${email}`, id )
  }

  appointment(model:any):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `user/appointments/create`, model )
  }


}
