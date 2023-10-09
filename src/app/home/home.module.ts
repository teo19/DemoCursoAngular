import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DemoPipeModule } from '../demo-pipe/demo-pipe.module';
import { HomeComponent } from './home.component';
// import { registerLocaleData } from '@angular/common';
// import  localeJA from '@angular/common/locales/ja';
// import { FormsModule } from '@angular/forms';
// import { DemoimageDirective } from '../demoimage.directive';
// import { ColorsDirective } from '../colors.directive';
// import { ContadorModule } from '../contador/contador.module';
// import { TablaPeriodicaModule } from '../tabla-periodica/tabla-periodica.module';
// import { Tabla2Module } from '../tabla2/tabla2.module';
import { HomeRoutingModule } from './home-routing.module';
// registerLocaleData(localeJA, 'ja');

@NgModule({
  declarations: [
    HomeComponent,
    // DemoimageDirective,
    // ColorsDirective, 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // DemoPipeModule,
    // FormsModule,
    // ContadorModule,
    // TablaPeriodicaModule
  ],
  providers: [
  ]
})
export class HomeModule { }
