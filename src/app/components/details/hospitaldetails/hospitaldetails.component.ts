import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DetailsService } from 'src/app/core/services/details.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/core/services/app.service';
import { Hospital } from 'src/app/core/interface/hospital';

@Component({
  selector: 'app-hospitaldetails',
  standalone: true,
  imports: [CommonModule,  CarouselModule, RouterLink],
  templateUrl: './hospitaldetails.component.html',
  styleUrls: ['./hospitaldetails.component.scss']
})
export class HospitaldetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute, private _DetailsService:DetailsService, private _AppService:AppService, private _Router:Router){}
  hospitalId:string|null = ''
  details!:Hospital ;
  hospital:Hospital[] = [];
  ngOnInit():void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        params.get('id')
        this.hospitalId = params.get('id')
      }
    })
    this._DetailsService.displayHospitalDetails(this.hospitalId).subscribe({
      next: (response) => {
        console.log(response);
        this.details = response
      },error: (err) =>{
        console.log(err);
      }
    })
    this._AppService.hospitalApi().subscribe({
      next:(response) => {
        console.log(response)
        this.hospital = response
      },error:(err) => {
        console.log(err)
      }
    })
  }
  allHospital():void{
    this._Router.navigate(['/hospital'])
  }
  hospitalOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 200,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      940: {
        items: 3
      }
    }
  }
}
