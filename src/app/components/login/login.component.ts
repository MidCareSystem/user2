import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor(private _AuthService:AuthService, private _Router:Router, private _ToastrService:ToastrService){}

errors:string = ""
error:string = ""
isloading:boolean = false

loginForm:FormGroup = new FormGroup({
  email: new FormControl(null, [Validators.required , Validators.email]),
  password: new FormControl(null, [Validators.required])
})

handleform():void{
  const userData = this.loginForm.value;
  this.isloading = true
  if(this.loginForm.valid == true){
    this._AuthService.Login(userData).subscribe({
      next: (response) =>{
        console.log(response);
        this.isloading = false
        this.errors = ''
        localStorage.setItem('eToken', response.registerResponse.idToken )
        localStorage.setItem('rToken', response.registerResponse.refreshToken )
        this._Router.navigate(['/home'])
        this._ToastrService.success('Successfully Login')
      },
      error: (err)=>{
        console.log(err);
        this.error = err.message
        this.isloading = false
        this.errors = '654'
      }
    })
  }
}
}
