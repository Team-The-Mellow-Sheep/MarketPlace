import { DashboardSmartphonesComponent } from './components/admin/dashboard-smartphones/dashboard-smartphones.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardUsersComponent } from './components/admin/dashboard-users/dashboard-users.component';


import {
  SignInFormComponent,
  SignUpFormComponent,
  ShoppingCartComponent,
  AdminComponent,
} from './components';

const usersRoutes: Routes = [
  {
    path: 'sign-in',
    component: SignInFormComponent,
  },
  {
    path: 'sign-up',
    component: SignUpFormComponent,
  },
  {
    path: 'shopCart',
    component: ShoppingCartComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/dashboard-users',
    component: DashboardUsersComponent,
  },
  {
    path: 'admin/dashboard-smartphones',
    component: DashboardSmartphonesComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
