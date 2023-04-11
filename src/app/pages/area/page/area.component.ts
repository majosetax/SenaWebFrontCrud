import { Component,OnInit } from '@angular/core';
import { AreaModel } from '@models/area.model';
import { AreaService } from '@services/area.service';
import { UINotificationService } from '@services/uinotification.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})

export class AreaComponent implements OnInit{

  areas:AreaModel[]=[];
  area:AreaModel;
  
  protected formTitle:string;
  protected showModalArea:boolean= false;

  constructor(
    private _uiNotificationService: UINotificationService,
    private _areaService: AreaService
  ){}

  public ngOnInit():void{
    this.getAreas();
  }
  public getAreas(){
    this._areaService.getAreas().subscribe(areas=>{
      this.areas=areas;
    },error=>{
      this._uiNotificationService.error("Error de conexión",error);
    });
  }
  public onDeleteArea(event:number){
    this._areaService.deleteArea(event).subscribe(() =>{
      console.log('area eliminada correctamente.');
      this.getAreas();
    },
    error => {
      console.log('ocurrio un error al eliminar el area:', error);
    });
    //revisar, cuando tiene infraestructuras relacionadas no deja eliminar
  }
  public onCreateArea(event:boolean){
    this.showModalArea=event;
    this.formTitle='Añadir Area'
  }
  public reset(event:boolean){
    this.showModalArea=event;
    this.formTitle='';
    this.area=null;
  }
  public onSaveArea(event:AreaModel){
    if(event.id){
      this._areaService.updateArea(event).subscribe(()=>{
        this.getAreas();
        this.reset(false);
      });
    }else{
      this._areaService.createArea(event).subscribe(()=>{
        this.getAreas();
        this.reset(false);
      });
    }
  }
  public onUpdateArea(event: AreaModel){
    this.formTitle='Editar Area'
    this.area=event;
    this.showModalArea=true;
  }

}
