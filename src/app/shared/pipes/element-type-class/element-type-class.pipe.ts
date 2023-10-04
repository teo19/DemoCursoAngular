import { Pipe, PipeTransform } from '@angular/core';
import { ElementType } from '../../models/periodic-element-type.interface';

@Pipe({
  name: 'elementClass'
})
export class ElementTypeClassPipe implements PipeTransform {

  transform(type: ElementType): string {
    switch(type) {
      case ElementType.Gas:
        return 'gas';
      case ElementType.Metal:
        return 'metal';
      case ElementType.NonMetal:
        return 'noMetal';
      default:
        return '';
    }
  }

}
