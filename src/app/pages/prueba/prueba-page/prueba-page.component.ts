import { Component,OnInit,EventEmitter, Input,Output} from '@angular/core';
import { TareaModel } from '@models/tarea.model';
import { TareaService } from '@services/tarea.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prueba-page',
  templateUrl: './prueba-page.component.html',
  styleUrls: ['./prueba-page.component.scss']
})
export class PruebaPageComponent implements OnInit {


  @Input() tarea: TareaModel;//actualizar
  @Output() store: EventEmitter<TareaModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  
  mostrarForm: boolean = false;
  tareas: TareaModel[] = [];
  nuevaTarea: TareaModel = { descripcion: '', fecha: new Date() };
  tareaParaActualizar: TareaModel = { descripcion: '', fecha: new Date() };
  tareaSeleccionada: TareaModel | null = null;

  constructor(
   
    private _tareaService:TareaService
  ){
   
  }

  ngOnInit(): void {
   this.traerTareas();
  }

  traerTareas(){
   
    this._tareaService.traerTareas().subscribe(tareas=>{
    this.tareas=tareas;

  });
}


mostrarFormulario() {
  this.mostrarForm = true;
}


agregarTarea() {

  this._tareaService.agregarTarea(this.nuevaTarea).subscribe(() => 
  {
  this.nuevaTarea = { descripcion: '', fecha: new Date() };
  this.mostrarForm = true;
  this.traerTareas();

  });
}


seleccionarTarea(tarea: TareaModel) {
  this.tareaSeleccionada = { ...tarea }; 
  }


  actualizarTarea() { 
  if (this.tareaSeleccionada && this.tareaSeleccionada.id) {
    this._tareaService.actualizarTarea(this.tareaSeleccionada).subscribe(
      () => {
        this.traerTareas();
        this.mostrarForm=true;
      });
    } 
  }

confirmarEliminarTarea(tarea: TareaModel | undefined){

  if (tarea && tarea.id !== undefined) {
    const confirmacion = confirm(`¿Estás seguro de eliminar a ${tarea.descripcion}?`);
    if (confirmacion) {
      this.eliminarTarea(tarea.id);
      
    }
  } 
}
    
  eliminarTarea(tareaId: number) {

    this._tareaService.eliminarTarea(tareaId).subscribe(
      () => {
      this.traerTareas();
      });
  }
}