import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedeRoutingModule } from './sede-routing.module';
import { SedeComponent } from './components/sede/sede.component';
import { SedeListComponent } from './components/sede-list/sede-list.component';


@NgModule({
  exports:[
    SedeComponent
  ],
  declarations: [
    SedeComponent,
    SedeListComponent
  ],
  imports: [
    CommonModule,
    SedeRoutingModule
  ]
})
export class SedeModule { }
