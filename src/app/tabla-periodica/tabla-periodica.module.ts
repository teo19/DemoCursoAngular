import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPeriodicaComponent } from './tabla-periodica.component';
import { MatTableModule } from '@angular/material/table';
import { ElementTypeClassModule } from '../shared/pipes/element-type-class/element-type-class.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    TablaPeriodicaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ElementTypeClassModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule
  ],
  exports: [
    TablaPeriodicaComponent,
    MatTableModule,
    ElementTypeClassModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule
  ]
})
export class TablaPeriodicaModule { }
