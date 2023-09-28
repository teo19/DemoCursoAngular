import { NgModule } from '@angular/core';
import { DemoPipe } from './demo.pipe';



@NgModule({
  declarations: [ DemoPipe ],
  imports: [],
  exports: [DemoPipe]
})
export class DemoPipeModule { }
