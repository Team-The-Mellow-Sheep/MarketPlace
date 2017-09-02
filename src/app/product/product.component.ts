import { ProductService } from './services/product.service';


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Params, ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Observable<any[]>;
  productId: string;
  constructor(private prductService: ProductService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.product =
      this.route.params
        .switchMap((params: Params) => {
          this.productId = params['productId'];
          return this.prductService.getProduct(this.productId);
        });
  }
}
