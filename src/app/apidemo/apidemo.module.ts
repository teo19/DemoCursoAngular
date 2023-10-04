import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApidemoComponent } from './apidemo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ApidemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ApidemoModule { }
