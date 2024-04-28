import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, Form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = Form && Form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],

})
export class AuthComponent {

  constructor( private router: Router) {

  }

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
	  passwordFormControl = new FormControl('', [Validators.required]);



      matcher = new MyErrorStateMatcher();


  login() {
    this.router.navigateByUrl('/dashboard/student/studentCreate');
  }

    /*
********************************************************************
Validamos el formulario
Representamos y validamos el conjunto de datos para el formulario
********************************************************************
*/

  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required, Validators.email

    ]),
    password: new FormControl('', [
      Validators.required,

    ]),
});

}
