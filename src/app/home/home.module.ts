import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

import { DemoPipeModule } from '../demo-pipe/demo-pipe.module';
// import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { registerLocaleData } from '@angular/common';
import  localeJA from '@angular/common/locales/ja';
import { FormsModule } from '@angular/forms';
import { DemoimageDirective } from '../demoimage.directive';
import { ColorsDirective } from '../colors.directive';
registerLocaleData(localeJA, 'ja');

@NgModule({
  declarations: [
    HomeComponent,
    DemoimageDirective,
    ColorsDirective, 
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    DemoPipeModule,
    FormsModule
  ],
  providers: [
  ]
})
export class HomeModule { }
