import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoElementoRoutingModule } from './nuevo-elemento-routing.module';
import { NuevoElementoComponent } from './nuevo-elemento.component';


@NgModule({
  declarations: [
    NuevoElementoComponent
  ],
  imports: [
    CommonModule,
    NuevoElementoRoutingModule
  ]
})
export class NuevoElementoModule { }
