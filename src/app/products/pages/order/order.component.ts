import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  public isUpperCase:boolean=false;
public sortValue:keyof Hero | undefined;
  items: MenuItem[] | undefined;
  heores: Hero[]=[
    {name:"Superman",canFly:true,color:Color.blue},
    {name:"Batman",canFly:false,color:Color.black},
    {name:"Daredevil",canFly:false,color:Color.red},
    {name:"Robin",canFly:false,color:Color.red},
    {name:"Linterna Verde",canFly:true,color:Color.green},
    {name:"Spiderman",canFly:false,color:Color.red},
  ];
  ngOnInit() {
      this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          }
      ];
    
  }
  public toggleUpperCase():void{
    this.isUpperCase=!this.isUpperCase;
  }
  public sortBy(value:keyof Hero):void{
    this.sortValue=value;
  } 
}
