import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from 'src/app/core/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule,  ReactiveFormsModule],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(private _AppService:AppService, private _Router:Router){}

  hospital!:any; 
  emergency:any ;
  ngOnInit(): void {
    this._AppService.hospitalApi().subscribe({
      next: (response) => {
        this.hospital = response
      },error: (err)=>{
        console.log(err);
      }
    })
    this._AppService.emergencyApi().subscribe({
      next: (response) => {
        this.emergency = response
      },error: (err)=>{
        console.log(err);
      }
    })
  }

  appointment:FormGroup = new FormGroup({
    hospitalId: new FormControl(null),
    appointmentDate: new FormControl(null),
    appointmentType: new FormControl('Blood Donation'),
    contactNumber: new FormControl(null),
    emergencyId: new FormControl(null)
  })

  handelAppointment():void{
    const appoin= this.appointment.value
    this._AppService.appointment(appoin).subscribe({
      next:(response) => {
        console.log(response);
        this._Router.navigate(['/emergency'])
      },error: (err) => {
        console.log(err);
        
      }
    })
  }

}
