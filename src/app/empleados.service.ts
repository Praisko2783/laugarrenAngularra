import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpladosService } from "./servicio-emplados.service";

@Injectable()

export class EmpleadosService{
    constructor(private servicioVentanaEmergente: ServicioEmpladosService){

    }
    empleados:Empleado[]=[
        new Empleado("Pako", "Biain", "Delegado", 3080),
        new Empleado("Lorea", "Arregi", "Laguntzailea", 2080),
        new Empleado("Nerea", "Elorza", "Admin", 4077),
        new Empleado("Laura", "Urain", "Sail burua", 4250)
      ];

      agregarEmpleadoServicio(miEmpleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Eransteko langilea: " + miEmpleado.apellido + ", " + miEmpleado.nombre + "\n Soldata: " + miEmpleado.salario);
        this.empleados.push(miEmpleado);
      }
      encontrarEmpleado(indice:number){
        let empleado:Empleado = this.empleados[indice];
        return empleado;
      }
      actualizaEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado = this.empleados[indice];
        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;
      }
      eliminaEmpleado(indice:number){
        this.empleados.splice(indice, 1);
      }
    }