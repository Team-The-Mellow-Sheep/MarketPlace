import { ProductComponent } from './product.component';
import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
// import { AuthService } from './../shared/services/auth.service';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    // HomeRoutingModule,
    RouterModule
  ],
  declarations: [ProductComponent],
  providers: [
    ProductService,
    //  AuthService
  ]
})
export class ProductModule { }
