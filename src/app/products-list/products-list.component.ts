import { ProductsListService } from './services/products-list.service';

import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AbstractFirebaseService } from '../shared/services/abstract-firebase.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {

  smartPhones = new BehaviorSubject([]);

  constructor(
    private productsListService: ProductsListService,
  ) {
    // this.smartPhones = this.productsListService.getSmarthphones();
    const asd = this.productsListService.getListProductByCamera('', '12 MP');
    // console.log(asd)
  }
  @HostListener('window:scroll', [])
  onWindowScroll(numberProduct) {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.smartPhones = this.productsListService.getSmarthphones();
    }
  }
  ngOnInit() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // window.scrollTo(0, 0);
  }

  onScroll() {
    this.smartPhones = this.productsListService.getSmarthphones();
  }

}
