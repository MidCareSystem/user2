import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/interface/user';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userInfo!:User ;
  message!:any;
  constructor(private _UserService:UserService, private _ToastrService:ToastrService){}

  ngOnInit():void{
    this._UserService.userApi().subscribe({
      next: (response)=>{
        console.log(response);
        this.userInfo = response
      },error: (err)=>{
        console.log(err);
      }
    })
  }

}

