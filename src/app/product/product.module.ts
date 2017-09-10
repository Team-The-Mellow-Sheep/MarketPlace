import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppModule } from './../app.module';
// import { AddToShoppingCartFormModule } from './../shopping-cart/add-to-shopping-cart-form/add-to-shopping-cart-form.module';
// import { AddToShoppingCartFormComponent } from './shopping-cart/add-to-shopping-cart-form/add-to-shopping-cart-form.component';

@NgModule({
  imports: [
    ProductRoutingModule,
    CommonModule,
    RouterModule,
    // AddToShoppingCartFormModule,
    // AddToShoppingCartFormComponent,
  ],
  declarations: [ProductComponent], // AddToShoppingCartFormComponent],
  providers: [
    ProductService,
  ],
  // exports: [AppModule], // AddToShoppingCartFormModule],
})
export class ProductModule { }
