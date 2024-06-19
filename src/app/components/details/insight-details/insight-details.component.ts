import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DetailsService } from 'src/app/core/services/details.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/core/services/app.service';
import { Insight } from 'src/app/core/interface/insight';

@Component({
  selector: 'app-insight-details',
  standalone: true,
  imports: [CommonModule,  CarouselModule, RouterLink],
  templateUrl: './insight-details.component.html',
  styleUrls: ['./insight-details.component.scss']
})
export class InsightDetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute, private _DetailsService:DetailsService, private _AppService:AppService, private _Router:Router){}
  insightId:string|null = ''
  details!:Insight ;
  insight:Insight[] = [];
  ngOnInit():void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        params.get('id')
        this.insightId = params.get('id')
      }
    })
    this._DetailsService.displayInsightDetails(this.insightId).subscribe({
      next: (response) => {
        console.log(response);
        this.details = response
      },error: (err) =>{
        console.log(err);
      }
    })
    this._AppService.insightApi().subscribe({
      next:(response) => {
        console.log(response)
        this.insight = response
      },error:(err) => {
        console.log(err)
      }
    })
  }
  allInsight():void{
    this._Router.navigate(['/insight'])
  }
  insightOptions: OwlOptions = {
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
