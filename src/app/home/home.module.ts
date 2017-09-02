import { ProductsListService } from './../products-list/services/products-list.service';
import { RouterModule } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { HomeComponent } from './home.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent],
  providers: [
    ProductsListService,
    AuthService
  ]
})
export class HomeModule { }
