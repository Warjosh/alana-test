import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { AppComponent } from './app.component';
import { Ejercicio1Component } from './ejercico_1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio_2/ejercicio2.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
