import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoDate'
})
export class DemoPipe implements PipeTransform {

  transform(date: Date): any {
    return date.toLocaleString();
  }

}
