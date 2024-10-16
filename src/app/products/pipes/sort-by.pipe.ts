import { Pipe, PipeTransform } from '@angular/core';
import { Color, Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    switch(sortBy){
      case 'name':
        return heroes.sort((a,b)=>(a.name>b.name)?1:-1)
        break
      case 'canFly':
        return heroes.sort((a,b)=>(a.canFly>b.canFly)?1:-1)
        break
      case 'color':
        return heroes.sort((a,b)=>(Color[a.color]>Color[b.color])?1:-1)
        break
      default: return heroes
    }

  
  }

}
