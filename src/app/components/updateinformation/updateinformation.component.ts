import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/interface/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateinformation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './updateinformation.component.html',
  styleUrls: ['./updateinformation.component.scss']
})
export class UpdateinformationComponent {
  isloading:boolean = false
  user!:User;
  constructor(private _UserService:UserService, private _Router:Router, private _ToastrService:ToastrService){}

  userInfo!:User ;
  selectedImage: File | undefined;
  
  updateUser:FormGroup = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    dob: new FormControl(null, [Validators.required]),
    bloodType: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
  })

  ngOnInit():void{
    this._UserService.userApi().subscribe({
      next: (response)=>{
        this.userInfo = response
      },error:(err) =>{
        console.log(err);
      }
    })
  }

  handleUpdate():void{
    this.isloading = true
    const userData = this.updateUser.value
    this._UserService.updateUser(userData).subscribe({
      next: (response) => {
        this.isloading = false
        console.log(response);
        this._ToastrService.success('Information Updated Successfully')
        this._Router.navigate(['/user'])
      },error: (err) => {
        this.isloading = false
        console.log(err);
      },
    })
  }
  onSelected(event:any) {
    this.selectedImage = <File>event.target.files[0];
  }

  onUpload() {
    this._UserService.userApi().subscribe({
      next: (response)=>{
        this.userInfo = response
      },error: (err)=>{
        console.log(err);
      }
    })
    if (!this.selectedImage) {
      console.error('No image selected.');
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedImage, this.selectedImage.name);

    this._UserService.uploadImage(formData).subscribe(
      {
        next: (response) => {
          console.log('Image uploaded successfully:', response);
            this._ToastrService.success(response.message)
          this._UserService.userApi().subscribe({
            next: (response)=>{
              this.userInfo = response
            },error: (err)=>{
              this._ToastrService.error(response.message)
              console.log(err);
            }
          })
          // Handle response as needed
        },
        error:(err) => {
          console.error('Error uploading image:', err);
          // Handle error response
        }
      }
    );
  }
}

