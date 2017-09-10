import { ProductsListService } from './services/products-list.service';

import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AbstractFirebaseService } from '../shared/services/abstract-firebase.service';
// import { AddToShoppingCartFormComponent } from './../shopping-cart/add-to-shopping-cart-form/add-to-shopping-cart-form.component';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  // directives: [AddToShoppingCartFormComponent]
})
export class ProductsListComponent implements OnInit {

  private formBuilder: FormBuilder;
  smartPhones = new BehaviorSubject([]);
  addToCartForm: FormGroup;

  constructor(
    private productsListService: ProductsListService,
  ) {
    // this.smartPhones = this.productsListService.getSmarthphones();
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
    this.addToCartForm = this.formBuilder.group({
      quantity: ['', [Validators.min(-1)]],
    });

    // window.scrollTo(0, 0);
  }

  onScroll() {
    this.smartPhones = this.productsListService.getSmarthphones();
  }

  onAddtoCart() {

  }

}
