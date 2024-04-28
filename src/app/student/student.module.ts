import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentRoutingModule } from './student-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    StudentCreateComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
	MatCardModule,
	MatButtonModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule
	
  ]
})
export class StudentModule { }
