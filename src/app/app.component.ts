import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ejer1 = false;
  ejer2 = false;
  ocultar (item) {
    if (item === 1) { this.ejer1 = true; }
    if (item === 2) { this.ejer2 = true; }
  }
}
