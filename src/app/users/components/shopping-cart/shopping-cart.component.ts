import { Component } from '@angular/core';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['../user.component.css']
})

export class ShoppingCartComponent {
  products = [
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
  totalPrice = this.products.reduce((total, amount) => total + amount.price, 0);
}
