import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './page/area.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunModule } from '@components/comun.module';
import { AreaListComponent } from './components/area-list/area-list.component';
import { AreaFormComponent } from './components/area-form/area-form.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  exports:[
    AreaComponent
  ],
  declarations: [
    AreaComponent,
    AreaListComponent,
    AreaFormComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    ReactiveFormsModule,
    ComunModule,
    SweetAlert2Module.forChild()
  ]
})
export class AreaModule { }
