import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json'
  })
};
@Injectable()

export class AppService {

  constructor(private httpClient: HttpClient) {}

  // Funcion que llama a una API, se pasa por el Url al cual se debe conectar
  public getAll(Url: any): Observable<Object[]> {
    return this.httpClient.get<Object[]>(Url, httpOptions);
  }

}
