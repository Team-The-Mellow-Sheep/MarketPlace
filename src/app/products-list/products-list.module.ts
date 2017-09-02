import { ProductsListComponent } from './products-list.component';
import { ProductsListService } from './services/products-list.service';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProductsListComponent],
  providers: [
    ProductsListService,
  ]
})
export class ProductsListModule { }
