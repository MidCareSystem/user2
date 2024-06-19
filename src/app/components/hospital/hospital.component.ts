import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { RouterLink } from '@angular/router';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { Hospital } from 'src/app/core/interface/hospital';

@Component({
  selector: 'app-hospital',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchPipe, FormsModule],
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent {
  term:string = ''
  hospital:Hospital[] = []
  constructor(private _AppService:AppService){}
  ngOnInit(): void {
    this._AppService.hospitalApi().subscribe({
      next:(response) => {
        console.log(response)
        this.hospital = response
      },error:(err) => {
        console.log(err)
      }
    })
  }
}
