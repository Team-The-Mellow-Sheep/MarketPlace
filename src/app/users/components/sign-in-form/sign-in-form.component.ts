import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  providers: [AuthService]
})
export class SignInFormComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }
  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  onSignInFormSubmit() {
    const formControls = this.signInForm.controls;
    this.authService.signIn(formControls['email'].value, formControls['password'].value)
      .then((data) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
        this.router.navigate(['/']);
      });
  }
}
