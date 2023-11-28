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
    
    return this._coreServicce.get<TareaModel[]>('pruebas');
  }

  agregarTarea(tarea: TareaModel){
    
    return this._coreServicce.post<TareaModel>('pruebas', tarea);
   }

  actualizarTarea(tarea: TareaModel) {

    return this._coreServicce.put('pruebas/'+ tarea.id, tarea);
  }

  eliminarTarea(tareaId: number) {
 
    return this._coreServicce.delete('pruebas/'+tareaId);
  }

  
}
