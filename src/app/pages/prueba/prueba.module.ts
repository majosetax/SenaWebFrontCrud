import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaPageComponent } from './prueba-page/prueba-page.component';
import { PruebaListComponent } from './prueba-list/prueba-list.component';
import { PruebaComponent } from './prueba/prueba.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    PruebaPageComponent,
    PruebaListComponent,
    PruebaComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    FormsModule,
    SweetAlert2Module.forChild()
  ]
})
export class PruebaModule { }
