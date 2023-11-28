import { Component,OnInit} from '@angular/core';
import { TareaModel } from '@models/tarea.model';
import { TareaService } from '@services/tarea.service';
import { UINotificationService } from '@services/uinotification.service';


@Component({
  selector: 'app-prueba-page',
  templateUrl: './prueba-page.component.html',
  styleUrls: ['./prueba-page.component.scss']
})
export class PruebaPageComponent implements OnInit {

 
  private showModalRol = false;
  tarea: TareaModel = null;
  tareas: TareaModel[] = [];
 

  constructor(
    private _uiNotificationService: UINotificationService,
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
      }, error => {
        this._uiNotificationService.error("Error de conexión");
      });
  }

actualizarTarea(tarea: TareaModel) {
  this.tarea = tarea;
  this.showModalRol = true;
}

createTarea(){
  this.tarea = null;
  this.showModalRol = true;
}

guardarTarea(tarea: TareaModel) {
  if (tarea.id) {
    this._tareaService.actualizarTarea(tarea).subscribe(rol => {
      this.traerTareas();
      this.reset();
    });
  } else {
    this._tareaService.agregarTarea(tarea).subscribe(rol => {
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
  this.showModalRol = false;
}
    
 
}