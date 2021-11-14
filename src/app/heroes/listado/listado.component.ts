import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes:string[] = ['Ironman', 'Capitan America', 'Thor', 'Hulk', 'Spiderman'];
  heroeBorrado:string = ''

  borrarHeroe(){
    this.heroeBorrado  = this.heroes.shift() || '';
  }
}
