import { UserService } from './../shared/services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardUsersComponent } from './components/admin/dashboard-users/dashboard-users.component';
import { DashboardSmartphonesComponent } from './components/admin/dashboard-smartphones/dashboard-smartphones.component';

import {
  SignInFormComponent,
  SignUpFormComponent,
  ShoppingCartComponent
} from './components';


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
    ShoppingCartComponent,
    AdminComponent,
    DashboardUsersComponent,
    DashboardSmartphonesComponent
  ],
  providers: [UserService],
})
export class UsersModule { }
