import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [
    ClientCreateComponent,
    ClientListComponent,
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
