import { Injectable } from '@angular/core';
import { InfraestructuraModel } from '@models/infraestructura.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class InfraestructuraService {

  constructor(
    private _coreService: CoreService
  ) { }

  //retorna todas las infraestructuras
  public getInfraestructuras(){
    return this._coreService.get<InfraestructuraModel[]>('infraestructuras');
  }
  //retorna una infraestructura basado en su id
  public getInfraestructura(id:number){
    return this._coreService.get<InfraestructuraModel>('infraestructuras/'+id);
  }
  //borra una infraestructura de la base de datos
  public deleteInfraestructura(id:number){
    return this._coreService.delete('infraestructuras/'+id)
  }
  //crea una infraestructura
  public createInfraestructura(infraestructura:InfraestructuraModel){
    infraestructura.nombreInfraestructura=infraestructura.nombreInfraestructura.toUpperCase();
    infraestructura.descripcion=infraestructura.descripcion.toUpperCase();
    return this._coreService.post<InfraestructuraModel>('infraestructura',infraestructura);
  }
  //actualiza una infraestructura existente
  public updateInfraestructura(infraestructura: InfraestructuraModel){
    infraestructura.nombreInfraestructura=infraestructura.nombreInfraestructura.toUpperCase();
    infraestructura.descripcion=infraestructura.descripcion.toUpperCase();
    return this._coreService.post<InfraestructuraModel>('infraestructura/'+infraestructura.id,infraestructura);
  }
}
