import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  SignInFormComponent,
  SignUpFormComponent,
  ShoppingCartComponent
} from './components';

import { UsersRoutingModule } from './users-routing.module';
// import { AuthGuard } from '../shared/guards/authGuard';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    //  AuthGuard
  ],
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
    ShoppingCartComponent
  ],
  providers: [],
})
export class UsersModule { }
