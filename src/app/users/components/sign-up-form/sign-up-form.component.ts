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
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  providers: [AuthService]
})

export class SignUpFormComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSignUpFormSubmit() {
    const formControls = this.signUpForm.controls;
    console.log(formControls['username'].value);
  }
}
