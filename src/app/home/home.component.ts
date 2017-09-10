import { ProductsListService } from './../products-list/services/products-list.service';

import { Component, OnInit, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = new BehaviorSubject([]);
  withoutFilter = '';
  constructor(private productsListService: ProductsListService) {
  }
  @HostListener('window:scroll', [])
  onWindowScroll(numberProduct) {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.products = this.productsListService.getSmarthphones(this.withoutFilter, this.withoutFilter);
    }
  }
  ngOnInit() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // window.scrollTo(0, 0);
  }
  onScroll() {
    this.products = this.productsListService.getSmarthphones(this.withoutFilter, this.withoutFilter);
  }
}
