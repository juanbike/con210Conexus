import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectorCreateComponent } from './inspector-create/inspector-create.component';
import { InspectorlistComponent } from './inspectorlist/inspectorlist.component';
import { InspectorListComponent } from './inspector-list/inspector-list.component';
import { InspectorDetailComponent } from './inspector-detail/inspector-detail.component';
import { WelderCreateComponent } from './welder-create/welder-create.component';
import { WelderListComponent } from './welder-list/welder-list.component';
import { WelderDetailComponent } from './welder-detail/welder-detail.component';
import { TeamRoutingModule } from './team-routing.module';



@NgModule({
  declarations: [
    InspectorCreateComponent,
    InspectorlistComponent,
    InspectorListComponent,
    InspectorDetailComponent,
    WelderCreateComponent,
    WelderListComponent,
    WelderDetailComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
