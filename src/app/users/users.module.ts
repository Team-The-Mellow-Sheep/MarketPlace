import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  SignInFormComponent,
  SignUpFormComponent
} from './components';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
  ],
  providers: [],
})
export class UsersModule { }
