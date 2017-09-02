import { ProductsListService } from './../products-list/services/products-list.service';

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Observable<any[]>;
  constructor(private productsListService: ProductsListService) {
    this.productsListService.getListProduct(8);
    this.products = this.productsListService.getLatestCountItems();
  }
}
