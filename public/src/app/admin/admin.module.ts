import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
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

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
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
  	MenuLateralComponent]
})
export class AdminModule { }
