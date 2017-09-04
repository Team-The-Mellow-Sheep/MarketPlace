import { ProductsListService } from './services/products-list.service';

import { Component, OnInit, HostListener } from '@angular/core';
// import { Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/* import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import * as _ from 'lodash'; */
import { AbstractFirebaseService } from '../shared/services/abstract-firebase.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {

  /*   products: Observable<any[]>; */

  smartPhones = new BehaviorSubject([]);
  /*   batch = 2;
    lastKey = '1';
    finished = false; */
  constructor(
    private productsListService: ProductsListService,
    //  private firebaseService: AbstractFirebaseService<any>
  ) { // @Inject(DOCUMENT) private document: Document) {
    /*  this.productsListService.getListProduct(4);
     this.products = this.productsListService.getLatestCountItems(); */
    // this.productsListService.onWindowScroll(20);
  }
  @HostListener('window:scroll', [])
  onWindowScroll(numberProduct) {
    //    /* let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.scrollHeight;
    //    let max = document.documentElement.scrollHeight;
    //    //  console.log('dssd')
    //    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    //    if (pos <= max) {
    //      console.log('dddd')
    //    }
    //   */
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      /*  this.productsListService.getListProduct(1);
       this.products = this.productsListService.getLatestCountItems(); */
      this.smartPhones = this.productsListService.getSmarthphones();
    }
  }
  ngOnInit() {
    window.scrollTo(50, 50);
    // this.smartPhones = this.productsListService.getSmarthphones();
  }

  onScroll() {
    console.log('scrolled');
    this.smartPhones = this.productsListService.getSmarthphones();
  }

}
