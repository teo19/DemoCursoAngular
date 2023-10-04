import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementTypeClassPipe } from './element-type-class.pipe';

@NgModule({
  declarations: [
    ElementTypeClassPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [ElementTypeClassPipe]
})
export class ElementTypeClassModule { }
