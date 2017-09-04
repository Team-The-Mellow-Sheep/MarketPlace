import { ProductsListComponent } from './products-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const productsListRoutes: Routes = [
  {
    path: '', component: ProductsListComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(productsListRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsListRoutingModule { }
