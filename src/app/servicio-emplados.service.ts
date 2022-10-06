import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpladosService {

  constructor() { }
  muestraMensaje(mensaje:string){
    alert(mensaje);
  }
}
