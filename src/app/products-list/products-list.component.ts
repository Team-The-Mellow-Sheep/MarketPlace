import { element } from 'protractor';
import { ProductsListService } from './services/products-list.service';
import { AbstractFirebaseService } from '../shared/services/abstract-firebase.service';
import { ProductService } from './../product/services/product.service';

import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { AddToShoppingCartFormComponent } from './../shopping-cart/add-to-shopping-cart-form/add-to-shopping-cart-form.component';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormGroupDirective } from '@angular/forms';
import { AuthService } from './../shared/services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserService } from './../shared/services/user.service';
import { ShoppingCart } from './../shared/models/shopping-cart';
import { SaleItem } from './../shared/models/sale-item';
import { Product } from './../shared/models/product';
import { User } from './../shared/models/user-model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { ShoppingCartService } from './../shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  // directives: [AddToShoppingCartFormComponent]
})
export class ProductsListComponent implements OnInit {

  smartPhones; // = new BehaviorSubject([]);
  private finished = false;
  private filters = [];
  private filterCategori = '';
  private filterProp = '';

  private formBuilder: FormBuilder = new FormBuilder();
  // smartPhones = new BehaviorSubject([]);
  addToCartForm: FormGroup;
  isAuthenticated: boolean;
  shoppingCart: ShoppingCart;

  private product: Product;

  user: User;

  constructor(
    private productService: ProductService,
    private productsListService: ProductsListService,
    private authService: AuthService,
    private userService: UserService,
    // private shoppingCartService: ShoppingCartService,
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
    this.addToCartForm = this.formBuilder.group({
      quantity: ['', [Validators.min(-1)]],
    });
    this.authService.authState.subscribe((state: AngularFireAuthModule) => {
      this.isAuthenticated = state !== null;
    });

    // window.scrollTo(0, 0);
  }

  onScroll() {
    if (this.filters.length <= 0) {
      this.smartPhones = this.productsListService.getSmarthphones(this.filterCategori, this.filterProp);
    }
  }

  onAddtoCart(productId: string) {
    this.productService.getProduct(productId)
      .subscribe(
      result => {
        console.log('++++++');
        console.log(result);

        this.product = result[0];
        const quantity = this.addToCartForm.controls['quantity'].value;
        const saleItem = new SaleItem(productId, result[0].title, Number(quantity), result[0].price);
        console.log('++++++auth');
        console.log(this.authService);
        // console.log(productId);
        // console.log(result[0].title);
        // console.log(quantity);
        // console.log(result[0].price);

        // this.authService.uid
        //   .subscribe(uid => {
        this.userService.get(this.authService.uid).subscribe(u => {
          console.log('++++++user');
          console.log(this.authService.uid);
          console.log(u);

          this.user = u;
          this.userService.addToCart(saleItem);
        });

        // });
      },
      error => { console.log(error); },
      () => { });

  }

}
