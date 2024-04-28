import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';



const routes: Routes = [
  { path:'clients', component: ClientListComponent },
  { path:'clientCreate', component: ClientCreateComponent },
  { path:'clientDetails/id', component: ClientDetailComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
