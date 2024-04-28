import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HydrostaticCreateComponent } from './hydrostatic-create/hydrostatic-create.component';
import { HydrostaticDetailComponent } from './hydrostatic-detail/hydrostatic-detail.component';
import { HydrostaticListComponent } from './hydrostatic-list/hydrostatic-list.component';
import { HydrostaticRoutingModule } from './hydrostatic-routing.module';



@NgModule({
  declarations: [
    HydrostaticCreateComponent,
    HydrostaticDetailComponent,
    HydrostaticListComponent
  ],
  imports: [
    CommonModule,
    HydrostaticRoutingModule
  ]
})
export class HydrostaticModule { }
