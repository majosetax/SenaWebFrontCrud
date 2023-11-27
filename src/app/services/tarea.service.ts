import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { TareaModel } from '@models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(
    private _coreServicce:CoreService
  ) { }

  traerTareas(){
    let url:string='pruebas';
    return this._coreServicce.get<TareaModel[]>(url);
  }

  agregarTarea(tarea: TareaModel){
    let url:string='pruebas';
    return this._coreServicce.post<TareaModel>(url, tarea);
   }

  actualizarTarea(tarea: TareaModel) {
    let url:string='pruebas';
    return this._coreServicce.put(`${url}/${tarea.id}`, tarea);
  }

  eliminarTarea(tareaId: number) {
    let url:string='pruebas';
    return this._coreServicce.delete(`${url}/${tareaId}`);
  }
}
