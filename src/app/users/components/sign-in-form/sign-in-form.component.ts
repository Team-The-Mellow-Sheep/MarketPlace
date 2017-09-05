import { UserRoutersService } from './../../../shared/services/user-routers.service';
import { AuthService } from './../../../shared/services/auth.service';

import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['../user.component.css'],
  providers: [AuthService]
})
export class SignInFormComponent implements OnInit {
  signInForm: FormGroup;
  authError: string;
  returnUrl: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private userRoutersService: UserRoutersService,
  ) {
    this.returnUrl = this.userRoutersService.urls[this.userRoutersService.urls.length - 1] || '/';
  }
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
          this.router.navigateByUrl(this.returnUrl);
        }
      });
  }
}
