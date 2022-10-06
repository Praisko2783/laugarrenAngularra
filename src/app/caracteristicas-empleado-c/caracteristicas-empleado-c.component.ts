import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpladosService } from '../servicio-emplados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();
    
  constructor(private miServicioHijo: ServicioEmpladosService) { }

  ngOnInit(): void {
  }
  agregaCaracteristicas(value: string){
    //this.miServicioHijo.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }

}
