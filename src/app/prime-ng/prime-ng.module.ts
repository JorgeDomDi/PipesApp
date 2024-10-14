import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';

import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [], 
  exports: [
    MenuModule,

    MenubarModule,
    PanelModule,
    FieldsetModule,
    CardModule,
    ButtonModule,
    
  ]
})
export class PrimeNgModule { }
