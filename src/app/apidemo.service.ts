import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidemoService {

  constructor(private http: HttpClient) { }

  validarUsuario(tipoUsuario: string){
    console.log('validando usuario...');
    return tipoUsuario === 'ADMIN' ? true : false;
  }

  getCatStatus(status: number){
    return this.http.get(`/api/${status}`, { responseType: 'blob'});
  }
}
