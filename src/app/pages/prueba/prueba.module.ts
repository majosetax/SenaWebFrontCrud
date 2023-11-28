import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaPageComponent } from './prueba-page/prueba-page.component';
import { PruebaListComponent } from './components/prueba-list/prueba-list.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunModule } from "../../components/comun.module";

@NgModule({
    exports: [
        PruebaComponent
    ],
    declarations: [
        PruebaPageComponent,
        PruebaListComponent,
        PruebaComponent
    ],
    imports: [
        CommonModule,
        PruebaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SweetAlert2Module.forChild(),
        ComunModule
    ]
})
export class PruebaModule { }
