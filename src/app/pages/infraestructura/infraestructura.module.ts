import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraestructuraRoutingModule } from './infraestructura-routing.module';
import { InfraestructuraComponent } from './page/infraestructura.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunModule } from '@components/comun.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { InfraestructuraListComponent } from './components/infraestructura-list/infraestructura-list.component';


@NgModule({
  exports:[
    InfraestructuraComponent
  ],
  declarations: [
    InfraestructuraComponent,
    InfraestructuraListComponent
  ],
  imports: [
    CommonModule,
    InfraestructuraRoutingModule,
    ReactiveFormsModule,
    ComunModule,
    SweetAlert2Module.forChild()
  ]
})
export class InfraestructuraModule { }
