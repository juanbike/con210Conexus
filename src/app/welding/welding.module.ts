import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeldingCreateComponent } from './welding-create/welding-create.component';
import { WeldingListComponent } from './welding-list/welding-list.component';
import { WeldingDetailComponent } from './welding-detail/welding-detail.component';
import { GenerationqrcodeCreateComponent } from './generationqrcode-create/generationqrcode-create.component';
import { GenerationqrcodeListComponent } from './generationqrcode-list/generationqrcode-list.component';
import { GenerationqrcodeDetailComponent } from './generationqrcode-detail/generationqrcode-detail.component';
import { WeldingRoutingModule } from './welding-routing.module';



@NgModule({
  declarations: [
    WeldingCreateComponent,
    WeldingListComponent,
    WeldingDetailComponent,
    GenerationqrcodeCreateComponent,
    GenerationqrcodeListComponent,
    GenerationqrcodeDetailComponent
  ],
  imports: [
    CommonModule,
    WeldingRoutingModule
  ]
})
export class WeldingModule { }
