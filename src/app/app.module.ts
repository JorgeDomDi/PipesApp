import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Configuracion del locale de la app para la confuguracion de idiomas
import  LocaleEsArg from '@angular/common/locales/es-AR';
import  LocaleFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';
// sirve para establecer los idiomas que quiero registrar en la app
registerLocaleData(LocaleEsArg)
registerLocaleData(LocaleFrCA)
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [ 
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    //para establecer el idioma de manera global
    {
      provide:LOCALE_ID,useValue:'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
