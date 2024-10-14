import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

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
    //keyValue pipe
    public person={
      name:"Fernando",
      age:36,
      address:"Ottawa, Canada",
    }
    //async pip
    public myObservableTimer=interval(2000).pipe(
      tap(value=>console.log('tap: ',value)
      )
    );
    public promiseValue:Promise<string>=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
    },3500)
    })
}
