import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sede-list',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.scss']
})
export class SedeListComponent {
   @Input() title:string;

   @Output() boton = new EventEmitter<number>();
   contador:number=0;

   contar() {
    this.contador++;
    this.boton.emit(this.contador)
   }
}
