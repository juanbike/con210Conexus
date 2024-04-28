import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JointCreateComponent } from './joint-create/joint-create.component';
import { JointListComponent } from './joint-list/joint-list.component';
import { JointDetailComponent } from './joint-detail/joint-detail.component';
import { JointRoutingModule } from './joint-routing.module';



@NgModule({
  declarations: [
    JointCreateComponent,
    JointListComponent,
    JointDetailComponent
  ],
  imports: [
    CommonModule,
    JointRoutingModule
  ]
})
export class JointModule { }
