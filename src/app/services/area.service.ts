import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { AreaModel } from '@models/area.model';

@Injectable({
  providedIn: 'root'
})

export class AreaService {

  constructor(
    private _coreService: CoreService
  ) { }
  
  //retorna todos las areas
  public traerAreas(){
    return this._coreService.get<AreaModel[]>('areas');
  }
  //retorna un area al introducir una id
  public traerArea(id:number){
    return this._coreService.get<AreaModel>('areas/'+id);
  }
  //borra una area de la base de datos
  public borrarArea(id:number){
    return this._coreService.delete('areas/'+id);
  }
  //crea un area
  public guardarArea(area: AreaModel){
    area.nombreArea = area.nombreArea.toUpperCase();
    area.codigo = area.codigo.toUpperCase();
    return this._coreService.post<AreaModel>('areas',area);
  }
  //actualiza un area existente
  public actualizarArea(area: AreaModel){
    area.nombreArea = area.nombreArea.toUpperCase();
    area.codigo = area.codigo.toUpperCase();
    return this._coreService.put('areas/'+area.id,area);
  }
  
}
