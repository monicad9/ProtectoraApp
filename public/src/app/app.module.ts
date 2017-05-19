import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { ColaboraComponent } from './colabora/colabora.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { IndexComponent } from './index/index.component';
import { LocalizanosComponent } from './localizanos/localizanos.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortadaComponent } from './portada/portada.component';


const routes: Routes = [
    {path: '' , component: IndexComponent},
    {path: 'About' , component: AboutComponent},
    {path: 'Localizanos' , component: LocalizanosComponent},
    {path: 'Servicios' , component: ServiciosComponent}, 
    {path: 'Galeria' , component: GaleriaComponent},
    {path: 'Colabora' , component: ColaboraComponent},
    {path: 'Adopta' , component: AdoptaComponent},
    {path: 'admin' , component: AdminComponent},
    {path: '**', component: PagenotfoundComponent}

];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    AdoptaComponent,
    ColaboraComponent,
    FooterComponent,
    GaleriaComponent,
    IndexComponent,
    LocalizanosComponent,
    MenuComponent,
    PagenotfoundComponent,
    ServiciosComponent,
    PortadaComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMw16fSTTssaRZZ7vLA5AShU-IyvOASIw'
    }),
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
