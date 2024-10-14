import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';

import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [],
  imports: [], 
  exports: [
    MenuModule,
    ToolbarModule,
    MenubarModule,
    PanelModule,
    FieldsetModule,
    CardModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    TableModule
  ]
})
export class PrimeNgModule { }
