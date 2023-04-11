import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedeRoutingModule } from './sede-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunModule } from '@components/comun.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SedeComponent } from './page/sede.component';
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
    SedeRoutingModule,
    ReactiveFormsModule,
    ComunModule,
    SweetAlert2Module.forChild()
  ]
})
export class SedeModule { }
