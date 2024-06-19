import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DetailsService } from 'src/app/core/services/details.service';
import { emergency } from 'src/app/core/interface/emergency';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-emergencydetails',
  standalone: true,
  imports: [CommonModule,  CarouselModule, RouterLink],
  templateUrl: './emergencydetails.component.html',
  styleUrls: ['./emergencydetails.component.scss']
})
export class EmergencydetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute, private _DetailsService:DetailsService, private _AppService:AppService, private _Router:Router){}
  emergencyId:string|null = ''
  details!:emergency ;
  emergency:emergency[] = [];
  ngOnInit():void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) =>{
        params.get('id')
        this.emergencyId = params.get('id')
      }
    })
    this._DetailsService.displayEmergencyDetails(this.emergencyId).subscribe({
      next: (response) => {
        console.log(response);
        this.details = response
      },error: (err) =>{
        console.log(err);
      }
    })
    this._AppService.emergencyApi().subscribe({
      next:(response) => {
        console.log(response)
        this.emergency = response
      },error:(err) => {
        console.log(err)
      }
    })
  }
  allEmergency():void{
    this._Router.navigate(['/emergency'])
  }
  emergencyOptions: OwlOptions = {
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
