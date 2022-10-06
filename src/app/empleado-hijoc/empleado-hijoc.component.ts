import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijoc',
  templateUrl: './empleado-hijoc.component.html',
  styleUrls: ['./empleado-hijoc.component.css']
})
export class EmpleadoHijocComponent implements OnInit {

  @Input()
  empleadoDeLista!: Empleado;
  @Input()
  indice!: number;
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

