import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductsListService } from './services/products-list.service';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AbstractFirebaseService } from '../shared/services/abstract-firebase.service';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    ProductsListRoutingModule,
    CommonModule,
    RouterModule,
    //   InfiniteScrollModule
  ],
  declarations: [ProductsListComponent],
  providers: [
    ProductsListService,
    //  AbstractFirebaseService
  ]
})
export class ProductsListModule { }
