import { Pipe, PipeTransform } from '@angular/core';
import { Question } from './interfaces/question';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Question[], filter: string): any {
    return items.filter(item => item.subject==filter)
  }

}
