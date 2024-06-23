import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Hospital } from 'src/app/core/interface/hospital';
import { blog } from 'src/app/core/interface/blog';
import { Insight } from 'src/app/core/interface/insight';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  hospital:Hospital[] = []
  blog:blog[] = []
  insight:Insight[] = []

  constructor(private _Router:Router, private _AppService:AppService){}
  ngOnInit():void{

    this._AppService.hospitalApi().subscribe({
      next: (response) => {
        console.log( response);
        this.hospital = response
      },error: (err) => {
        console.log( "no" , err);
      }
    })
    this._AppService.blogApi().subscribe({
      next: (response) => {
        this.blog = response
      },error: (err) => {
        console.log( "no" , err);
      }
    })
    this._AppService.insightApi().subscribe({
      next: (response) => {
        console.log( response);
        this.insight = response
      },error: (err) => {
        console.log( err);
      }
    })
}

  userOrNoForEmergency():void{
    if(localStorage.getItem('eToken') !== null){
      this._Router.navigate(['/emergency']);
    }else{
      this._Router.navigate(['/login'])
    }
  }
  userOrNoForHospital():void{
    if(localStorage.getItem('eToken') !== null){
      this._Router.navigate(['/hospital']);
    }else{
      this._Router.navigate(['/login'])
    }
  }
  userOrNoForBlog():void{
    if(localStorage.getItem('eToken') !== null){
      this._Router.navigate(['/blog']);
    }else{
      this._Router.navigate(['/login'])
    }
  }

  userOrNoForInsight():void{
    if(localStorage.getItem('eToken') !== null){
      this._Router.navigate(['/insight']);
    }else{
      this._Router.navigate(['/login'])
    }
  }

  hospitalOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

  blogOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: true,
    navSpeed: 400,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

  insightOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: true,
    navSpeed: 200,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

}
