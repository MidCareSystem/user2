import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DetailsService } from 'src/app/core/services/details.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/core/services/app.service';
import { blog } from 'src/app/core/interface/blog';

@Component({
  selector: 'app-blogdetails',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterLink],
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute, private _DetailsService:DetailsService, private _AppService:AppService, private _Router:Router){}
  blogId:string|null = ''
  details!:blog ;
  blog:blog[] = [];
  ngOnInit():void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        params.get('id')
        this.blogId = params.get('id')
      }
    })
    this._DetailsService.displayBlogDetails(this.blogId).subscribe({
      next: (response) => {
        console.log(response);
        this.details = response
      },error: (err) =>{
        console.log(err);
      }
    })
    this._AppService.blogApi().subscribe({
      next:(response) => {
        console.log(response)
        this.blog = response
      },error:(err) => {
        console.log(err)
      }
    })
  }
  allBlog():void{
    this._Router.navigate(['/blog'])
  }
  blogOptions: OwlOptions = {
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
