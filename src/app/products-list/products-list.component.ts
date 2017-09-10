import { element } from 'protractor';
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

  private smartPhones; // = new BehaviorSubject([]);
  private finished = false;
  private filters = [];
  private filterCategori = '';
  private filterProp = '';


  constructor(
    private productsListService: ProductsListService,
  ) {

  }

  private onChange(element) {

    if (!element.checked) {

      let filter = element.value;
      filter = filter.split('/');
      for (let i = 0; i < this.filters.length; i += 1) {

        if (this.filters[i].prop === filter[0] && this.filters[i].value === filter[1]) {

          this.filters.splice(i, 1);
        }
      }
    }
    if (element.checked) {

      let filter = element.value;
      filter = filter.split('/');

      this.filterCategori = filter[0];
      this.filterProp = filter[1];

      if (this.filterCategori !== '') {

        this.filters.push({ prop: this.filterCategori, value: this.filterProp });
      }
    }
  }
  filter() {
    this.smartPhones = this.productsListService.getPhonesFilter(this.filters);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(numberProduct) {
    if (this.filters.length <= 0) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.smartPhones = this.productsListService.getSmarthphones(this.filterCategori, this.filterProp);
        this.finished = this.productsListService.isFInishedScroll();
      }
    }
  }
  ngOnInit() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // window.scrollTo(0, 0);
  }

  onScroll() {
    if (this.filters.length <= 0) {
      this.smartPhones = this.productsListService.getSmarthphones(this.filterCategori, this.filterProp);
    }
  }

}
