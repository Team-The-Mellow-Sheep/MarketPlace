import { ProductsListService } from './../products-list/services/products-list.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = new BehaviorSubject([]);
  constructor(private productsListService: ProductsListService) {
    // this.productsListService.getListProduct(4);
    // this.products = this.productsListService.getLatestCountItems();
    this.products = this.productsListService.getSmarthphones();
  }
  ngOnInit() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // window.scrollTo(0, 0);
  }
  onScroll() {
    this.products = this.productsListService.getSmarthphones();
  }
}
