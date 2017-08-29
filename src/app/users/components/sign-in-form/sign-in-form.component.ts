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
  styleUrls: ['../user.component.css'],
  providers: [AuthService]
})
export class SignInFormComponent implements OnInit {
  signInForm: FormGroup;
  authError: string;
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
      .then((error) => {
        if (error) {
          this.authError = error.message;
        } else {
          this.router.navigate(['/']);
        }
      });
  }
}
