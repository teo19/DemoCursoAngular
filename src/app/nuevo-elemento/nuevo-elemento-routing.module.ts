import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoElementoComponent } from './nuevo-elemento.component';

const routes: Routes = [
  {
    path: '',
    component: NuevoElementoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoElementoRoutingModule { }
