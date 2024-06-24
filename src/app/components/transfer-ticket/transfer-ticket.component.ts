import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfer-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transfer-ticket.component.html',
  styleUrls: ['./transfer-ticket.component.scss']
})
export class TransferTicketComponent implements OnInit{

  constructor(private _AppService:AppService, private _ActivatedRoute:ActivatedRoute, private _Router:Router){}

  ticketId:any;
  userEmail:string = '';
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        params.get('id')
        this.ticketId = params.get('id')
      }
    })
  }




  transfer():void{
    this._AppService.transferTicket(this.ticketId, this.userEmail).subscribe({
      next:(response) =>{
        console.log(response);
        this._Router.navigate(['/tickets'])
      },error:(err) => {
        console.log(err);
      }
    })
  }

}
