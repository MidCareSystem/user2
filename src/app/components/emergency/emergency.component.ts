import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { emergency } from 'src/app/core/interface/emergency';
import { RouterLink } from '@angular/router';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchPipe, FormsModule],
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss']
})
export class EmergencyComponent implements OnInit {

  term:string = ''
  emergency:emergency[] = []
  constructor(private _AppService:AppService){}
  ngOnInit(): void {
    this._AppService.emergencyApi().subscribe({
      next:(response) => {
        console.log(response)
        this.emergency = response
      },error:(err) => {
        console.log(err)
      }
    })
  }
}
