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
  templateUrl: './sign-in-form.component.html'
})
export class SignInFormComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  onSignInFormSubmit() {
    const formControls = this.signInForm.controls;
    console.log(formControls['email'].value);
  }
}
