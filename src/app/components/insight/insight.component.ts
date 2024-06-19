import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { RouterLink } from '@angular/router';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { Insight } from 'src/app/core/interface/insight';

@Component({
  selector: 'app-insight',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchPipe, FormsModule],
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent {
  term:string = ''
  insight:Insight[] = []
  constructor(private _AppService:AppService){}
  ngOnInit(): void {
    this._AppService.insightApi().subscribe({
      next:(response) => {
        console.log(response)
        this.insight = response
      },error:(err) => {
        console.log(err)
      }
    })
  }
}
