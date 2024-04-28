import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumedCreateComponent } from './consumed-create/consumed-create.component';
import { ConsumedListComponent } from './consumed-list/consumed-list.component';
import { ConsumedDetailComponent } from './consumed-detail/consumed-detail.component';
import { DeliveredCreateComponent } from './delivered-create/delivered-create.component';
import { DeliveredListComponent } from './delivered-list/delivered-list.component';
import { DeliveredDetailComponent } from './delivered-detail/delivered-detail.component';
import { MaterialRoutingModule } from './material-routing.module';



@NgModule({
  declarations: [
    ConsumedCreateComponent,
    ConsumedListComponent,
    ConsumedDetailComponent,
    DeliveredCreateComponent,
    DeliveredListComponent,
    DeliveredDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
