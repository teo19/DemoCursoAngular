import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PeriodicElement } from '../shared/models/periodic-element.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'demo-nuevo-elemento',
  templateUrl: './nuevo-elemento.component.html',
  styleUrls: ['./nuevo-elemento.component.scss']
})
export class NuevoElementoComponent implements OnInit {

  formElemento: FormGroup;
  tipos: any[] = [];
  posicion: number;
  elemento: PeriodicElement = null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private snackbar: MatSnackBar) {
                this.route.params.subscribe(params => {
                  this.posicion = params && params['id'] ? Number(params['id']) : 0;
                  console.log(this.posicion);
                })
              }

  ngOnInit(): void {
    if (this.posicion && this.posicion > 0){
      const strElementos: string = localStorage.getItem('elementos');
      const elementos: PeriodicElement[] = strElementos ? JSON.parse(strElementos) : [];

      this.elemento =  elementos.find(c => c.position === this.posicion);
      console.log(this.elemento);
    }

    if (this.elemento){
      this.formElemento = this.fb.group({
        posicion: new FormControl({ value: this.elemento.position, disabled: true }, [Validators.required, Validators.max(120)]),
        nombre: new FormControl(this.elemento.name, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        peso: new FormControl(this.elemento.weight, [Validators.required, Validators.maxLength(10)]),
        simbolo: new FormControl(this.elemento.symbol,[Validators.required, Validators.maxLength(3)]),
        tipoElemento: new FormControl(this.elemento.type, [Validators.required])
      });
    } else {
      this.formElemento = this.fb.group({
        posicion: new FormControl('', [Validators.required, Validators.max(120)]),
        nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        peso: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        simbolo: new FormControl('',[Validators.required, Validators.maxLength(3)]),
        tipoElemento: new FormControl(1, [Validators.required])
      });
    }   

    this.tipos = [{id: 1, nombre: 'Gas'}, {id: 2, nombre: 'Metal'}, {id: 3, nombre: 'No Metal'}];

  }

  validateNumberOnly(event) {
    // console.log(event.keyCode);
    if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 46 || event.keyCode === 44) {
        return true;
    }
    return false;
  }

  validateIntOnly(event) {
    if ((event.keyCode >= 48 && event.keyCode <= 57)) {
        return true;
    }
    return false;
  }

  onReset(){
    this.formElemento.clearValidators();
    this.formElemento.updateValueAndValidity();
    this.formElemento.reset();
  }

  onClickCancel(){
    this.router.navigate(['tabla-periodica']);
  }

  submit(){
    if (this.formElemento.invalid ) {
      // console.log('1');
      this.snackbar.open('Existen campos requeridos, favor de capturar todos los campos requeridos.', 'Aceptar', {
        duration: 10000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      }).onAction().subscribe( () => {
        this.snackbar.dismiss();
      });
      // this.formElemento.clearValidators();
      // this.formElemento.updateValueAndValidity();
      return Object.values( this.formElemento.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          console.log('1');
          // console.log(this.formOS.controls);
          Object.values( control.controls ).forEach( control => {
            // console.log('1.1');
            return control.markAsTouched();
          } );
        } else {
          console.log('2');
          control.markAsTouched();
          // control.markAsPristine();
          
        }
      });

      
    }

    const elemento: PeriodicElement = {
      position: this.formElemento.get('posicion').value,
      name: this.formElemento.get('nombre').value,
      weight: this.formElemento.get('peso').value,
      symbol: this.formElemento.get('simbolo').value,
      type: this.formElemento.get('tipoElemento').value,
      selected: false
    };

    const strElementos: string = localStorage.getItem('elementos');
    let elementos: PeriodicElement[] = strElementos ? JSON.parse(strElementos) : [];   

    if (this.posicion && this.posicion > 0){
      const elem: PeriodicElement = elementos.find(c => c.position === this.posicion);
      const ix: number = elementos.indexOf(elem);
      if (ix >= 0)
        elementos[ix] = elemento;
    } else
      elementos.push(elemento);

    localStorage.setItem('elementos', JSON.stringify(elementos));
    this.router.navigate(['tabla-periodica']);
  }



}
