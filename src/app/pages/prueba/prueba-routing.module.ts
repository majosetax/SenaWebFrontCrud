import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaPageComponent } from './prueba-page/prueba-page.component';

const routes: Routes = [

  {
    path:'',
    component:PruebaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaRoutingModule { }
