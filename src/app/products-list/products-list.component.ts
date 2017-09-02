import { ProductsListService } from './services/products-list.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Params, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  products: Observable<any[]>;
  constructor(private productsListService: ProductsListService) {
    this.productsListService.getListProduct(20);
    this.products = this.productsListService.getLatestCountItems();
  }
}
