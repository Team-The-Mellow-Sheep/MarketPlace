import { ProductsListService } from './services/products-list.service';


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Params, ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  product: Observable<any[]>;
  constructor(private productsListService: ProductsListService) {
  }
}
