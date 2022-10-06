import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpladosService } from '../servicio-emplados.service';

@Component({
  selector: 'app-home.component',
  templateUrl: './home.component.component.html',
  styleUrls: ['./home.component.component.css']
})

export class HomeComponentComponent implements OnInit {
  title = 'Listado de empleados';

  constructor(private miServicio: ServicioEmpladosService, private empleadosService: EmpleadosService) { 
    //this.empleados = this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Langilea: " + miEmpleado.apellido + ", " + miEmpleado.nombre + "\n Langilearen ardura: " + miEmpleado.cargo + "\n Langilearen soldata: " + miEmpleado.salario );
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}

  

  

