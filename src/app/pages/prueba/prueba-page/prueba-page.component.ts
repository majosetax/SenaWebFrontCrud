import { Component,OnInit,Output,EventEmitter} from '@angular/core';
import { TareaModel } from '@models/tarea.model';
import { TareaService } from '@services/tarea.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-prueba-page',
  templateUrl: './prueba-page.component.html',
  styleUrls: ['./prueba-page.component.scss']
})
export class PruebaPageComponent implements OnInit {

  @Output() store = new EventEmitter<TareaModel>();
  @Output() cancel = new EventEmitter<void>();

 
  private showModalRol = false;

  formArea: UntypedFormGroup;
  mostrarForm: boolean = false;
  mostrarFormAct: boolean = false;
  tareas: TareaModel[] = [];
  tarea: TareaModel = null;
  nuevaTarea: TareaModel = { descripcion: '', fecha: new Date() };
  tareaParaActualizar: TareaModel = { descripcion: '', fecha: new Date() };
  tareaSeleccionada: TareaModel | null = null;

  constructor(
    private formBuilder:UntypedFormBuilder,
    private _tareaService:TareaService,
    
  ){
    this.buildForm();
  }

  ngOnInit(): void {
   this.traerTareas();
  }

  traerTareas(){
   
    this._tareaService.traerTareas().subscribe(tareas=>{
    this.tareas=tareas;

  });
}

private buildForm(){
  this.formArea = this.formBuilder.group({
    id: [0],
    descripcion: ['', [Validators.required]],
    fecha: [new Date(), [Validators.required]],
  });

  this.formArea.valueChanges
  .pipe(
    debounceTime(350)
  ).subscribe(data=>{
  });
}


closeModal(){
  this.cancel.emit();
}

mostrarFormulario() {
  this.mostrarForm = true;
  this.mostrarFormAct = false;
}

mostrarFormularioAct() {
  this.mostrarFormAct = true;
  this.mostrarForm = false;
}

agregarTarea() {

  this._tareaService.agregarTarea(this.nuevaTarea).subscribe(() => 
  {
  this.nuevaTarea = { descripcion: '', fecha: new Date() };
  this.traerTareas();
  this.mostrarForm = false;
  
  });
}


seleccionarTarea(tarea: TareaModel) {
  this.tareaSeleccionada = { ...tarea }; 
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

  actualizarTarea1(Tarea: TareaModel) {
    this.tarea = this.tarea;
    this.showModalRol = true;
  }

  reset() {
    this.tarea = null;
    this.showModalRol = false;
  }

  actualizarTarea() { 
  if (this.tareaSeleccionada && this.tareaSeleccionada.id) {
    this._tareaService.actualizarTarea(this.tareaSeleccionada).subscribe(
      () => {
        this.traerTareas();
        this.mostrarFormAct = false;
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