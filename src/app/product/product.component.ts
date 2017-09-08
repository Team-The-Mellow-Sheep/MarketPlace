import { AuthService } from './../shared/services/auth.service';
import { ProductService } from './services/product.service';

import { AngularFireAuthModule } from 'angularfire2/auth';
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
  isAuthenticated: boolean;
  userId: string;
  constructor(
    private prductService: ProductService,
    private router: Router, private route: ActivatedRoute,
    private authService: AuthService
  ) {
    authService.authState.subscribe((state: AngularFireAuthModule) => {
      this.isAuthenticated = state !== null;
    });
  }
  ngOnInit() {
    this.product =
      this.route.params
        .switchMap((params: Params) => {
          this.productId = params['productId'];
          return this.prductService.getProduct(this.productId);
        });
  }
  byProduct(event) {
    // this.authService.authState.subscribe(id => this.userId = id.uid);
    // this.product.subscribe(product =>
    //   this.prductService.update(product[0], { 'userIds': { 'iserId': this.userId } })
    //   // this.prductService.update(product, { userId: 'ss' })

    //  );
  }
}
