import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-ejercicio-1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: []
})

export class Ejercicio1Component implements OnInit {
  list: Array<any> = []; // Lista con valores de salida
  init: number; // valor incial del arreglo de valores
  end: number; // valor final del arreglo de valores
  constructor() { }

  ngOnInit() {
    // se inicializa las variables
    this.init = 0;
    this.end = 0;
    this.list = [];
   }

  cuadradoPerfecto ( ) {
    console.log( this.init > this.end);

    if ( this.init >= this.end ) {
      // en caso de error se recetean las variables
      this.init = this.end = 0;
      this.list = [];
      // mensaje de error para el usuario
      Swal.fire('¡Error!', 'valor inicial mayor al valor final.', 'error');
      return;
    }
    this.list = [];
    for ( let i = this.init; i <= this.end; i++) {
      let sum = 0;
      for (let j = i; j !== 0 ; j--) {
        // se verifica el resto de la division para comprobar que j divide a i
        if ( i % j === 0) {
          sum = sum + Math.pow(j, 2);
         }
      }
      // se valida que sea un nro intero y ademas sea una raiz perfecta
      if (Number.isInteger(Math.sqrt(sum)) ) {
        this.list.push({
            value : '[' + i + '] =>' + sum
          });
      }
    }
  }
}
