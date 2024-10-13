import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [],
  imports: [], 
  exports: [
    MenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
