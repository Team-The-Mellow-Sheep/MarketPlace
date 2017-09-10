import { ProductsListService } from './services/products-list.service';
import { AbstractFirebaseService } from '../shared/services/abstract-firebase.service';

import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {

  smartPhones; // = new BehaviorSubject([]);
  finished = false;
  private filterCategori = '';
  private filterProp = '';

  constructor(
    private productsListService: ProductsListService,
  ) {

  }
  private onChange(element) {
    let filter = element.value;
    filter = filter.split('/');

    this.filterCategori = filter[0];
    this.filterProp = filter[1];
  }
  filter() {
    this.smartPhones = this.productsListService.getPhonesFilter(this.filterCategori, this.filterProp);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(numberProduct) {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.smartPhones = this.productsListService.getSmarthphones(this.filterCategori, this.filterProp);
      this.finished = this.productsListService.isFInishedScroll();
    }
  }
  ngOnInit() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // window.scrollTo(0, 0);
  }

  onScroll() {
    this.smartPhones = this.productsListService.getSmarthphones(this.filterCategori, this.filterProp);
  }

}
