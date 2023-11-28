
import {Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaModel } from '@models/tarea.model';

@Component({
  selector: 'app-prueba-list',
  templateUrl: './prueba-list.component.html',
  styleUrls: ['./prueba-list.component.scss']
})
export class PruebaListComponent {

  @Input() tareas: TareaModel[] = [];
  @Output() update: EventEmitter<TareaModel> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() create: EventEmitter<void> = new EventEmitter();

  constructor(){}


  actualizar(tarea: TareaModel) {
    this.update.emit(tarea);
  }

  eliminar(idTarea: number) {
    this.delete.emit(idTarea);
  }

  agregar() {
    this.create.emit();
  }
}

