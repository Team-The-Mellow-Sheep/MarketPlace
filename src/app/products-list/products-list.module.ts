import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductsListService } from './services/products-list.service';

import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AddToShoppingCartFormComponent } from './../shopping-cart/add-to-shopping-cart-form/add-to-shopping-cart-form.component';
// import { AppModule } from './../app.module';

@NgModule({
  imports: [
    ProductsListRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    // AppModule,
    ReactiveFormsModule
  ],
  declarations: [ProductsListComponent,
    // AppModule,
    // AddToShoppingCartFormComponent
  ],
  providers: [
    ProductsListService,
  ],
  bootstrap: []
})
export class ProductsListModule {
    constructor() {

    }
}
