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
public clientsMap={
  '=0':'Actualmente no tenemos ningún cliente esperando',
  '=1':'Actualmente tenemos un cliente esperando',
  'other':'Actualmente tenemos # clientes esperando.'
 
}
//i18nPlural
public clients:string[]=["Pedro","Maria","Fenando","Jorge","Nalatlia"]
changeClient() {
  this.name="Melisa",
  this.gender="Female"
  }
  borrarCliente() {
 this.clients.shift()
    }
}
