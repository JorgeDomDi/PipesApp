import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

//i18nSelect
public name:string='Fernando'
public gender:'Female'|'Male'='Male'
public invitationMap={
  Male:'invitarlo',
  Female:'invitarla',
}
changeClient() {
  this.name="Melisa",
  this.gender="Female"
  }
}
