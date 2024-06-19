import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(emergency:any[], term:string):any[] {
    return emergency.filter((item) => item.frontMatter.title.toLowerCase().includes(term.toLowerCase()))
  }

}
