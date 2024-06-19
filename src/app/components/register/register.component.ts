import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){}

  exists:string = ''
  isloading:boolean = false

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required , Validators.email]),
    password: new FormControl(null, [Validators.required , Validators.pattern(/^[A-Z][a-z@0-9]{7,}$/)]),
    username: new FormControl(null, [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    lastName: new FormControl(null, [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    phone: new FormControl(null, [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  })

  handleform():void{
    const userData = this.registerForm.value;
    this.isloading = true

    if(this.registerForm.valid === true){
      this._AuthService.register(userData).subscribe({
        next: (response) =>{
          console.log(response);

          this.isloading = false
          this._Router.navigate(['/login']);


        },
        error:(err) =>{
          console.log(err);
          this.isloading = false
          this.exists= err.message
        }
      })
    }

  }

}
