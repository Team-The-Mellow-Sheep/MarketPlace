import { NotFoundComponent } from './../not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  // { path: '**', component: NotFoundComponent },
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
