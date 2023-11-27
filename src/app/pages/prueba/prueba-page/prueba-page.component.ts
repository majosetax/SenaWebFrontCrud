import { Component,OnInit } from '@angular/core';
import { TareaModel } from '@models/tarea.model';
import { TareaService } from '@services/tarea.service';

@Component({
  selector: 'app-prueba-page',
  templateUrl: './prueba-page.component.html',
  styleUrls: ['./prueba-page.component.scss']
})
export class PruebaPageComponent implements OnInit {

  tareas: TareaModel[] = [];


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
}