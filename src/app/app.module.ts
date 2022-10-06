import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijocComponent } from './empleado-hijoc/empleado-hijoc.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpladosService } from './servicio-emplados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home.component/home.component.component';
import { ProiectosComponentComponent } from './proiectos.component/proiectos.component.component';
import { QuienesComponentComponent } from './quienes.component/quienes.component.component';
import { ContactosComponentComponent } from './contactos.component/contactos.component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponenteComponent } from './actualiza-componente/actualiza-componente.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proiektuak', component:ProiectosComponentComponent},
  {path:'nor-garen', component:QuienesComponentComponent},
  {path:'harremana', component:ContactosComponentComponent},
  {path:'eguneratu/:id', component:ActualizaComponenteComponent},
  {path:'**', component:ErrorPersonalizadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijocComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProiectosComponentComponent,
    QuienesComponentComponent,
    ContactosComponentComponent,
    ActualizaComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpladosService,EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
