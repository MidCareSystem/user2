import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent  {

  constructor(private _Router:Router){}

  signOut():void{
    this._Router.navigate(['/login']);
    localStorage.removeItem('eToken')
    localStorage.removeItem('rToken')
    localStorage.removeItem('token')

  }
  header_variable:any ;
  token:any = localStorage.getItem('eToken');
}
