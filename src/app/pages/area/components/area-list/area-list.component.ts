import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AreaModel } from '@models/area.model';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent {
  @Input() areas:AreaModel[]=[];

  @Output() delete= new EventEmitter<number>();
  @Output() create= new EventEmitter<boolean>();
  @Output() update= new EventEmitter<AreaModel>();

  public deleteArea(id:number){
    /*const deleteindex:number=this.areas.findIndex(area=>area.id===id);
    if(deleteindex!==-1){
      this.areas.splice(deleteindex,1);
    }*/
    this.delete.emit(id);
  }
  public createArea(){

    this.create.emit(true);
  }
  public updateArea(area: AreaModel){
    this.update.emit(area);
  }
}
