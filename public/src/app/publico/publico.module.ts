import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicoRoutingModule } from './publico-routing.module';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { AboutComponent } from './about/about.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { ColaboraComponent } from './colabora/colabora.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { IndexComponent } from './index/index.component';
import { LocalizanosComponent } from './localizanos/localizanos.component';
import { MenuComponent } from './menu/menu.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortadaComponent } from './portada/portada.component';

import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { PublicoComponent } from './publico.component';


@NgModule({
  	imports: [
    	CommonModule,
    	PublicoRoutingModule,
    	AgmCoreModule.forRoot({
      		apiKey: 'AIzaSyCMw16fSTTssaRZZ7vLA5AShU-IyvOASIw'
    	})
  	],
  	declarations: [
  		AboutComponent,
  		AdoptaComponent,
  		ColaboraComponent,
  		FooterComponent,
  		GaleriaComponent,
  		IndexComponent,
  		LocalizanosComponent,
  		MenuComponent,
  		ServiciosComponent,
  		PortadaComponent,
  		PublicoComponent,
      PagenotfoundComponent
  	]
})
export class PublicoModule { }
