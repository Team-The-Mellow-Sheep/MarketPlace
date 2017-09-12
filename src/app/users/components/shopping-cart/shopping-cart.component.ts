import { ActivatedRoute, Params } from '@angular/router';
import { ProductsListService } from './../../../products-list/services/products-list.service';
import { Component } from '@angular/core';
import { AuthService } from './../../../shared/services/auth.service';
import { UserService } from './../../../shared/services/user.service';
import { ProductService } from './../../../product/services/product.service';
import { ShoppingCart } from './../../../shared/models/shopping-cart';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['../user.component.css']
})

export class ShoppingCartComponent {
  userId: string;
  products;

  shopCart;
  userService: UserService;
  constructor(private authService: AuthService, private productsListService: ProductsListService,
    userService: UserService, private productService: ProductService) {
    this.userService = userService;
    // let shopCart: ShoppingCart = new ShoppingCart();
    this.userId = localStorage.getItem('loggedUserId');
      this.userService.getUser(this.userId).subscribe(u => {
        this.shopCart = u[0].shoppingCart;
        this.products = u[0].shoppingCart.saleItems;

      },
    err => {console.log(err); },
      () => { }
  );
    this.authService.authState.subscribe(id => {
      this.userId = id.uid;
      // this.products = this.userService.addToCart();
      this.products = this.productsListService.getProduct(this.userId);
    });
  }



  removeProduct(el) {
    // console.log(el.currentTarget.value);
    // this.productService.getProduct(el.currentTarget.value);
  }
}
