import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApidemoService } from './apidemo.service';

@Injectable({
  providedIn: 'root'
})
export class DemoGuard implements CanActivate {
  constructor (private apiDemoService: ApidemoService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let valido: boolean = true;
      if (route.data){
        console.log('validar usuario');
        console.log(route.data);
        valido = this.apiDemoService.validarUsuario(route.data['TipoUsuario']);

        if(!valido){
          this.router.navigate(['/']);
          return valido;
        }
      }      
    return valido;
  }
  
}
