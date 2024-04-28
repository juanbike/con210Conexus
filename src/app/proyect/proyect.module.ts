import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectCreateComponent } from './proyect-create/proyect-create.component';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { ProyectDetailComponent } from './proyect-detail/proyect-detail.component';
import { ProyectRoutingModule } from './proyect-routing.module';



@NgModule({
  declarations: [
    ProyectCreateComponent,
    ProyectListComponent,
    ProyectDetailComponent
  ],
  imports: [
    CommonModule,
    ProyectRoutingModule
  ]
})
export class ProyectModule { }
