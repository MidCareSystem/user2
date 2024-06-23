import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  constructor(private _AuthService:AuthService, private _ToastrService:ToastrService){}

  value:string = '';
  
  sendEmail():void{
    this._AuthService.resetPassword(this.value).subscribe({
      next:(response) =>{
        console.log(response);
        this._ToastrService.success(response.message)
      },error: (err) => {
        console.log(err);
      }
    })
  }
}
