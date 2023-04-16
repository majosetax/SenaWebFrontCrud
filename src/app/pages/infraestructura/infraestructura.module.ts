import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraestructuraRoutingModule } from './infraestructura-routing.module';
import { InfraestructuraComponent } from './page/infraestructura/infraestructura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComunModule } from '@components/comun.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { InfraestructuraListComponent } from './components/infraestructura-list/infraestructura-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfraestructuraInfoComponent } from './components/infraestructura-info/infraestructura-info.component';

@NgModule({
  exports:[
    InfraestructuraComponent
  ],
  declarations: [
    InfraestructuraComponent,
    InfraestructuraListComponent,
    InfraestructuraInfoComponent
  ],
  imports: [
    CommonModule,
    InfraestructuraRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ComunModule,
    SweetAlert2Module.forChild()
  ]
})
export class InfraestructuraModule { }
