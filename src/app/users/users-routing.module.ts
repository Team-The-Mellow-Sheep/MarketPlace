import { NotFoundComponent } from './../not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  SignInFormComponent,
  SignUpFormComponent,
} from './components';

const usersRoutes: Routes = [
  {
    path: 'users/sign-in',
    component: SignInFormComponent,
  },
  {
    path: 'users/sign-up',
    component: SignUpFormComponent,
  },
  { path: '**', component: NotFoundComponent },
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
