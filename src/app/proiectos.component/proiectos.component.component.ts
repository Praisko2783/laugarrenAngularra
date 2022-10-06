import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpladosService } from '../servicio-emplados.service';

@Component({
  selector: 'app-proiectos.component',
  templateUrl: './proiectos.component.component.html',
  styleUrls: ['./proiectos.component.component.css']
})
export class ProiectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio: ServicioEmpladosService, private empleadosService: EmpleadosService) {
  }
  empleados:Empleado[]=[];
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  volverHome(){
    this.router.navigate([""]);
  }
   agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Langilea: " + miEmpleado.apellido + ", " + miEmpleado.nombre + "\n Langilearen ardura: " + miEmpleado.cargo + "\n Langilearen soldata: " + miEmpleado.salario );
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate([""]);
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
