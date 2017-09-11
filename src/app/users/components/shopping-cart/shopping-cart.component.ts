import { ActivatedRoute, Params } from '@angular/router';
import { ProductsListService } from './../../../products-list/services/products-list.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../shared/services/auth.service';
import { UserService } from './../../../shared/services/user.service';
import { ProductService } from './../../../product/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['../user.component.css']
})

export class ShoppingCartComponent implements OnInit {
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


  /*  products = [
     {
       name: 'Nokiq edikva si',
       price: 12.00,
       imageURL: 'https://www.get.bg/media/catalog/product/n/o/nokia-130-dual-sim-gsm(1).jpg'
     },
     {
       name: 'Nokia 1610',
       price: 13.50,
       imageURL: 'https://images-na.ssl-images-amazon.com/images/I/41UbZXPUoUL._SY445_.jpg'
     },
   ];
  */  // totalPrice = this.products.reduce((total, amount) => total + amount.price, 0);
  ngOnInit() {
    this.product =
      this.route.params
        .switchMap((params: Params) => {
          return this.productId = params['productId'];
          // return this.productsListService.getProduct(this.productId);
        });
    // console.log()
  }
  removeProduct() {

  }
}
