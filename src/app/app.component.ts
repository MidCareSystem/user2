import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'midcare';
  icon_up:any ;

  @HostListener('document:scroll')
  scroll():void{
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
      this.icon_up = true;
    }else{
      this.icon_up = false;
    }
  }
  up(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
