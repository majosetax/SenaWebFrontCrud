import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraestructuraRoutingModule } from './infraestructura-routing.module';
import { InfraestructuraComponent } from './components/infraestructura/infraestructura.component';


@NgModule({
  exports:[
    InfraestructuraComponent
  ],
  declarations: [
    InfraestructuraComponent
  ],
  imports: [
    CommonModule,
    InfraestructuraRoutingModule
  ]
})
export class InfraestructuraModule { }
