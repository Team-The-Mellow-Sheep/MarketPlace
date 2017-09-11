import { UserRoutersService } from './../../../shared/services/user-routers.service';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';

import { Router } from '@angular/router';
import { User } from '../../../shared/models/user-model';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['../user.component.css'],
  providers: [AuthService, UserService]
})

export class SignUpFormComponent implements OnInit {
  signUpForm: FormGroup;
  authError: string;
  returnUrl: string;
  user: User;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userRoutersService: UserRoutersService,
    private userService: UserService,
  ) {
    this.returnUrl = this.userRoutersService.urls[this.userRoutersService.urls.length - 1] || '/';
    if (this.returnUrl === '/users/sign-in') {
      this.returnUrl = this.userRoutersService.urls[this.userRoutersService.urls.length - 2] || '/';
    }
  }
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      address: [''],
    });
  }

  onSignUpFormSubmit() {
    const formControls = this.signUpForm.controls;
    this.authService.register(formControls['username'].value, formControls['email'].value, formControls['password'].value)
      .then((error) => {
        if (error) {
          this.authError = error.message;
        } else {
          this.router.navigateByUrl(this.returnUrl);
        }
      })
      .then(() => {
        // console.log('***');
        // console.log(localStorage.getItem('loggedUserId'));
        this.user = new User(
          // null,
          localStorage.getItem('loggedUserId'),
          formControls['username'].value,
          formControls['name'].value,
          formControls['email'].value,
          formControls['address'].value
        );
        this.userService.create(this.user)
          .then((error) => {
            if (error) {
              this.authError = error.message;
            } else {
              this.router.navigateByUrl(this.returnUrl);
            }
          });
      });
  }
}
