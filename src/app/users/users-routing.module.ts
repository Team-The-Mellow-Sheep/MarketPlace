import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import {
  SignInFormComponent,
  SignUpFormComponent,
  ShoppingCartComponent
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
