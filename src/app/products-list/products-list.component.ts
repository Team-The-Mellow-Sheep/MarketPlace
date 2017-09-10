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

  private formBuilder: FormBuilder;
  smartPhones = new BehaviorSubject([]);
  addToCartForm: FormGroup;
  isAuthenticated: boolean;
  shoppingCart: ShoppingCart;

  private product: Product;

  user: User;

  constructor(
    private productsListService: ProductsListService,
    private authService: AuthService,
    private userService: UserService,
    // private shoppingCartService: ShoppingCartService,
  ) {
    // this.smartPhones = this.productsListService.getSmarthphones();
    authService.authState.subscribe((state: AngularFireAuthModule) => {
      this.isAuthenticated = state !== null;
    });

    // this.shoppingCart = userService.GetShoppingCart(this.authService.uid);
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

  onAddtoCart(productId: string) {
    this.productsListService.get(productId)
      .subscribe(
      result => {
        console.log('++++++');
        console.log(JSON.stringify(result));

        this.product = result;
      },
      error => { console.log(error); },
      () => { });

    const quantity = this.addToCartForm.controls['quantity'].value;
    const saleItem = new SaleItem(productId, this.product.title, Number(quantity), this.product.price);
    this.userService.get(this.authService.uid).subscribe(u => this.user = u);
    this.userService.addToCart(saleItem);
  }

}
