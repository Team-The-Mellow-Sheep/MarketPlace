import { AbstractFirebaseService } from '../../shared/services';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './../../shared/services/auth.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import * as _ from 'lodash';
import { Product } from './../../shared/models/product';

@Injectable()
export class ProductsListService extends AbstractFirebaseService<any> {
  smartPhones = new BehaviorSubject([]);
  batch = 4;
  lastKey = '';
  finished = false;
  private listProduct: FirebaseListObservable<any[]>;
  constructor(
    protected db: AngularFireDatabase,
    protected authService: AuthService,
  ) {
    super(db, authService);

  }
  /*   getListProduct(numberProduct) {
      return this.listProduct =
        this.getList({ query: { limitToFirst: numberProduct } });
    } */
  get entityPath(): string {
    return `/smartphones`;
  }
  /* getLatestCountItems(): Observable<any[]> {
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
  } */

  getPhonesWhenScroll(batch, lastKey?) {
    const query = {
      orderByKey: true,
      limitToFirst: batch,
    };
    if (lastKey) {
      query['startAt'] = lastKey;
    }
    return this.getList({ query });
  }
  getSmarthphones(key?) {
    if (this.finished) {
      return;
    }
    this.getPhonesWhenScroll(this.batch + 1, this.lastKey)
      .do(phones => {
        this.lastKey = _.last(phones)['$key'];

        const newPhones = _.slice(phones, 0, this.batch);

        const currentPhones = this.smartPhones.getValue();

        if (this.lastKey === _.last(newPhones)['$key']) {
          this.finished = true;
        }
        this.smartPhones.next(_.concat(currentPhones, newPhones));
      }).take(1).subscribe();
    return this.smartPhones;
  }
}
