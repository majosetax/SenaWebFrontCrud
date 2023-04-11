import { Component, OnInit } from '@angular/core';
import { InfraestructuraModel } from '@models/infraestructura.model';
import { InfraestructuraService } from '@services/infraestructura.service';
import { UINotificationService } from '@services/uinotification.service';

@Component({
  selector: 'app-infraestructura',
  templateUrl: './infraestructura.component.html',
  styleUrls: ['./infraestructura.component.scss']
})
export class InfraestructuraComponent implements OnInit{
  
  infraestructuras: InfraestructuraModel[]=[];
  infraestructura:InfraestructuraModel;

  protected formTitle:string;
  protected showModalInfraestructura:boolean=false;

  constructor(
    private _uiNotificationService: UINotificationService,
    private _infraestructuraService: InfraestructuraService
  ){}

  ngOnInit():void{
    this.getInfraestructuras();
  }
  getInfraestructuras():void{
    this._infraestructuraService.getInfraestructuras().subscribe(infraestructuras=>{
      this.infraestructuras=infraestructuras;
      console.log(this.infraestructuras);
    },error=>{
      this._uiNotificationService.error("Error de conexión",error);
    })
  }
}
