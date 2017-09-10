import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductsListService } from './services/products-list.service';

import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AddToShoppingCartFormComponent } from './../shopping-cart/add-to-shopping-cart-form/add-to-shopping-cart-form.component';
// import { AppModule } from './../app.module';
import { AuthService } from './../shared/services';
import { UserService } from './../shared/services/user.service';
// import { ShoppingCartService } from './../shared/services/shopping-cart.service';

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
    // AuthService,
    // UserService,
    // ShoppingCartService,
  ],
  bootstrap: []
})
export class ProductsListModule {
    constructor() {

    }
}
