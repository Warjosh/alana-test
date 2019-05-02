import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ejercicio-2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: [],
  providers: [AppService]
})

export class Ejercicio2Component implements OnInit {
  constructor( private AppService: AppService) {  }
  url: String; // Url del API a conectar
  ngOnInit() { }
  // Funcion que llama al servicio GET con el Url especificado
  Llamar(Url) {
    console.log(Url);
    this.AppService.getAll(Url).subscribe(
      result => {
        console.log(result);
      },
      error => {
          console.log(error);
      }
      );

  }
}
