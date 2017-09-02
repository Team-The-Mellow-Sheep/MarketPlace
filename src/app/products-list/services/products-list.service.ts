import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './../../shared/services/auth.service';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AbstractFirebaseService } from '../../shared/services';

@Injectable()
export class ProductsListService extends AbstractFirebaseService<{ $key: string }> {
  private listProduct: FirebaseListObservable<any[]>;
  constructor(protected db: AngularFireDatabase, protected authService: AuthService) {
    super(db, authService);
    this.listProduct =
      this.getList({ query: { limitToFirst: 10 } });
  }
  get entityPath(): string {
    return `/smartphones`;
  }
  getLatestThreeItems(): Observable<any[]> {
    return this.listProduct.map((item) => {
      const items = [];

      item.forEach((product) => {
        this.get(product.$key)
          .subscribe((phone) => {
            items.push(phone);
          });
      });

      return items;
    });
  }
}
