import { Component,OnInit} from '@angular/core';
import { TareaModel } from '@models/tarea.model';
import { TareaService } from '@services/tarea.service';


@Component({
  selector: 'app-prueba-page',
  templateUrl: './prueba-page.component.html',
  styleUrls: ['./prueba-page.component.scss']
})
export class PruebaPageComponent implements OnInit {

 
  showModalTarea = false;
  tarea: TareaModel = null;
  tareas: TareaModel[] = [];
 

  constructor(

    private _tareaService:TareaService
    
  ){
    
  }

  ngOnInit(): void {
   this.traerTareas();
  }

  traerTareas() {
    this._tareaService.traerTareas()
      .subscribe(tareas => {
        this.tareas = tareas;
      });
  }

actualizarTarea(tarea: TareaModel) {
  this.tarea = tarea;
  this.showModalTarea = true;
}

createTarea(){
  this.tarea = null;
  this.showModalTarea = true;
}

guardarTarea(tarea: TareaModel) {
  if (tarea.id) {
    this._tareaService.actualizarTarea(tarea).subscribe(tarea => {
      this.traerTareas();
      this.reset();
    });
  } else {
    this._tareaService.agregarTarea(tarea).subscribe(tarea => {
      this.traerTareas();
      this.reset();
    })
  }
}


eliminarTarea(tareaId: number) {
  this._tareaService.eliminarTarea(tareaId).subscribe(() => {
    this.traerTareas();
  })
}



reset() {
  this.tarea = null;
  this.showModalTarea = false;
}
    
 
}