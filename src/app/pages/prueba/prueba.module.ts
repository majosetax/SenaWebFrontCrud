import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaPageComponent } from './prueba-page/prueba-page.component';


@NgModule({
  declarations: [
    PruebaPageComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule
  ]
})
export class PruebaModule { }
