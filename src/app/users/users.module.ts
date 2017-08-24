import { NgModule } from '@angular/core';

import {
  SignInFormComponent,
  SignUpFormComponent
} from './components';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    UsersRoutingModule
  ],
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
  ],
  providers: [],
})
export class UsersModule { }
