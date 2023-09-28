import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fecha: Date = new Date();
  numero: number = 500;
  porcentaje: number = 0.5;
  texto: string = 'Hola mundo!!!';
  items:string[] = ['a', 'b', 'c'];

  estadoDocumento: string = 'F';
  estadoSeleccionado: string;
  bandera: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClickCambiarEstado(){
    this.estadoDocumento = this.estadoSeleccionado;
  }

}
