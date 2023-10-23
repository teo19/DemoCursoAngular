import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoElementoRoutingModule } from './nuevo-elemento-routing.module';
import { NuevoElementoComponent } from './nuevo-elemento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    NuevoElementoComponent
  ],
  imports: [
    CommonModule,
    NuevoElementoRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class NuevoElementoModule { }
