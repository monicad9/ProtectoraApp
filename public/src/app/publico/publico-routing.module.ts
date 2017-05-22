import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicoComponent } from './publico.component';

import { AboutComponent } from './about/about.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { ColaboraComponent } from './colabora/colabora.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { IndexComponent } from './index/index.component';
import { LocalizanosComponent } from './localizanos/localizanos.component';
import { ServiciosComponent } from './servicios/servicios.component';

import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes: Routes = [
    {
    	path: '' , 
    	component: PublicoComponent,
	    children: [
    		{path: '' , component: IndexComponent},
			{path: 'About' , component: AboutComponent},
			{path: 'Localizanos' , component: LocalizanosComponent},
			{path: 'Servicios' , component: ServiciosComponent}, 
			{path: 'Galeria' , component: GaleriaComponent},
			{path: 'Colabora' , component: ColaboraComponent},
			{path: 'Adopta' , component: AdoptaComponent}		
		]
	},

	{ path: '**', component: PagenotfoundComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
