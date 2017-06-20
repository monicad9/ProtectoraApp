import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { PanelindexComponent } from './panelindex/panelindex.component';
import { AñadirmascotaComponent } from './añadirmascota/añadirmascota.component';
import { EditarvoluntariosComponent } from './editarvoluntarios/editarvoluntarios.component';
import { LibroacogidasComponent } from './libroacogidas/libroacogidas.component';
import { LibroreservasComponent } from './libroreservas/libroreservas.component';
import { ListamascotasComponent } from './listamascotas/listamascotas.component';
import { PaneltareasComponent } from './paneltareas/paneltareas.component';
import { RegistrarvoluntariosComponent } from './registrarvoluntarios/registrarvoluntarios.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { LoginComponent } from './login/login.component';

import { LoginGuardService } from './services/login-guard.service';


const routes_admin: Routes = [

	{path: 'admin', 
		component: AdminComponent, 
		canActivate:[LoginGuardService], 
		children: [
			{
				path: '',
				canActivateChild : [LoginGuardService],

				children : [
					{path: '', component: PanelindexComponent},
					{path: 'añadirmascota', component: AñadirmascotaComponent},
					{path: 'editarvoluntarios', component: EditarvoluntariosComponent},
					{path: 'libroacogidas', component: LibroacogidasComponent},
					{path: 'libroreservas', component: LibroreservasComponent},
					{path: 'listamascotas', component: ListamascotasComponent},
					{path: 'paneltareas', component: PaneltareasComponent},
					{path: 'registrarvoluntarios', component: RegistrarvoluntariosComponent},
					{path: 'veterinario', component: VeterinarioComponent}

				]
			}			
		]
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes_admin)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
