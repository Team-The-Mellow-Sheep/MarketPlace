import { RouterModule } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { HomeComponent } from './home.component';
import { HomeService } from './services';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent],
  providers: [
    HomeService,
    AuthService
  ]
})
export class HomeModule { }
