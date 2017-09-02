import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ProductRoutingModule,
    CommonModule,
    RouterModule
  ],
  declarations: [ProductComponent],
  providers: [
    ProductService,
  ]
})
export class ProductModule { }
