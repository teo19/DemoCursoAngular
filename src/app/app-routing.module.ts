import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadStrategyService } from './shared/services/custom-preload-strategy.service';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
// import { HomeComponent } from './home/home.component';
// import { ApidemoComponent } from './apidemo/apidemo.component';
// import { DemoGuard } from './demo.guard';

// const routes: Routes = [
//   {
//   path: '',
//   component: HomeComponent,
//   },
//   {
//     path: 'catdemo',
//     data: { tipoUsuario: 'ADMIN' },
//     canActivate: [DemoGuard],
//     component: ApidemoComponent
//   }
// ];
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // data: { preload: true }
  },
  {
    path: 'contador',
    loadChildren: () => import('./contador/contador.module').then(m => m.ContadorModule),
    // data: { preload: true }
  },
  {
    path: 'tabla-periodica',
    loadChildren: () => import('./tabla-periodica/tabla-periodica.module').then(m => m.TablaPeriodicaModule)
  },
  {
    path: 'nuevo-elemento',
    loadChildren: () => import('./nuevo-elemento/nuevo-elemento.module').then(m => m.NuevoElementoModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
    // preloadingStrategy: CustomPreloadStrategyService,
    preloadingStrategy: QuicklinkStrategy
  })],
  providers: [CustomPreloadStrategyService],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule { }
