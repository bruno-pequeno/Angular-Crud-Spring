import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'front-end': return 'code';
      case 'back-end': return 'computer';
      case 'both': return 'reorder';
      case 'null': return 'not_interested';
    }
    return 'code';
  }

}
