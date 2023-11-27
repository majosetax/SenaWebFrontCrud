import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaPageComponent } from './prueba-page/prueba-page.component';


@NgModule({
  declarations: [
    PruebaPageComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    FormsModule
  ]
})
export class PruebaModule { }
