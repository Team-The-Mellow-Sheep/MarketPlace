import { ActivatedRoute, Params } from '@angular/router';
import { ProductsListService } from './../../../products-list/services/products-list.service';
import { Component } from '@angular/core';
import { AuthService } from './../../../shared/services/auth.service';
import { UserService } from './../../../shared/services/user.service';
import { ProductService } from './../../../product/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['../user.component.css']
})

export class ShoppingCartComponent {
  userId: string;
  products;
  productId;
  product;
  constructor(private authService: AuthService, private productsListService: ProductsListService,
    private userService: UserService, private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.authService.authState.subscribe(id => {
      this.userId = id.uid;
      // this.products = this.userService.addToCart();
      this.products = this.productsListService.getProduct(this.userId);
    });
  }



  removeProduct(el) {
    console.log(el.currentTarget.value);
    this.productService.getProduct(el.currentTarget.value);
  }
}
