import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    ConfirmDialogComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class ConfirmDialogModule { }
