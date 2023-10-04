import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApidemoComponent } from './apidemo/apidemo.component';
import { DemoGuard } from './demo.guard';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  },
  {
    path: 'catdemo',
    data: { tipoUsuario: 'ADMIN' },
    canActivate: [DemoGuard],
    component: ApidemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
