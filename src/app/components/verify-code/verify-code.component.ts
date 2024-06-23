import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent {

  constructor(private _AuthService:AuthService, private _ToastrService:ToastrService, private _Router:Router){}

  verifyCode:FormGroup = new FormGroup({
    oobCode: new FormControl(''),
    newPassword: new FormControl('')
  })

  sendCode():void{
    this._AuthService.verifyCode(this.verifyCode.value).subscribe({
      next: (response) => {
        console.log(response)
        this._ToastrService.success(response.message)
        this._Router.navigate(['/login'])
      },error:(err) =>{
        console.log(err)
      }
    })
  }
}
