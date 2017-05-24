import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';

import { PanelindexComponent } from './panelindex/panelindex.component';
import { PanelimagesComponent } from './panelimages/panelimages.component';
import { PaneltareasComponent } from './paneltareas/paneltareas.component';
import { EditarvoluntariosComponent } from './editarvoluntarios/editarvoluntarios.component';
import { RegistrarvoluntariosComponent } from './registrarvoluntarios/registrarvoluntarios.component';
import { AñadirmascotaComponent } from './añadirmascota/añadirmascota.component';
import { ListamascotasComponent } from './listamascotas/listamascotas.component';
import { LibroacogidasComponent } from './libroacogidas/libroacogidas.component';
import { LibroreservasComponent } from './libroreservas/libroreservas.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { AdminComponent } from './admin.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './services/login.service';
import { LoginGuardService } from './services/login-guard.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
  	PanelindexComponent, 
  	PanelimagesComponent, 
  	PaneltareasComponent, 
  	EditarvoluntariosComponent, 
  	RegistrarvoluntariosComponent,
  	AñadirmascotaComponent, 
  	ListamascotasComponent, 
  	LibroacogidasComponent, 
  	LibroreservasComponent, 
  	VeterinarioComponent,
  	AdminComponent,
  	MenuLateralComponent,
  	LoginComponent],

  providers: [LoginService, LoginGuardService],
})
export class AdminModule { }
