import { RouterModule } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
// import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './services';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    // HomeRoutingModule,
    RouterModule
  ],
  declarations: [HomeComponent],
  providers: [
    HomeService,
    AuthService
  ]
})
export class HomeModule { }
