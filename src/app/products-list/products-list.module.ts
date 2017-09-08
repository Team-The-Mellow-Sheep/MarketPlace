import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductsListService } from './services/products-list.service';

import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../filter/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ProductsListRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ProductsListComponent, FilterPipe],
  providers: [ProductsListService]
})
export class ProductsListModule { }
