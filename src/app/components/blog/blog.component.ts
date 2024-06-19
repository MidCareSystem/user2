import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { RouterLink } from '@angular/router';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { Hospital } from 'src/app/core/interface/hospital';
import { blog } from 'src/app/core/interface/blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchPipe, FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  term:string = ''
  blog:blog[] = []
  constructor(private _AppService:AppService){}
  ngOnInit(): void {
    this._AppService.blogApi().subscribe({
      next:(response) => {
        console.log(response)
        this.blog = response
      },error:(err) => {
        console.log(err)
      }
    })
  }
}
