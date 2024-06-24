import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit{

  constructor(private _AppService:AppService){}

  information:any ;
  ngOnInit(): void {
    this._AppService.ticketApi().subscribe({
      next: (response) => {
        console.log(response)
        this.information = response
    },error:(err) => {
      console.log(err)
    }
    })
  }


}
