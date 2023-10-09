import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContadorRoutingModule } from './contador-routing.module';

@NgModule({
    declarations: [ContadorComponent],
    imports: [
      CommonModule,
      ContadorRoutingModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule
    ],
    exports: [
      ContadorComponent,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule
    ]
  })
  export class ContadorModule { }