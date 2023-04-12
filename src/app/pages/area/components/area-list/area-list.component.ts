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
  @Output() create= new EventEmitter<void>();
  @Output() update= new EventEmitter<AreaModel>();

  numRegistros:number=10;
  pageActual:number=0;

  enviarNumeroRegistros(num: number){
    this.numRegistros = num;
  }

  actualizar(area: AreaModel){
    this.update.emit(area);
  }

  eliminar(id:number){
    const deleteindex:number=this
      .areas.findIndex(area=>area.id===id);
    if(deleteindex!==-1){
      this.areas.splice(deleteindex,1);
    }
    this.delete.emit(id);
  }
  public agregar(){
    this.create.emit();
  }
  
}
