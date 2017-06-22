import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PublicoModule } from './publico/publico.module';
import { AdminModule } from './admin/admin.module';

import { LoginService } from './admin/services/login.service';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    PublicoModule  
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
