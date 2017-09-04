import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './../../shared/services/auth.service';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import * as _ from 'lodash';
/* import { HostListener } from '@angular/core'; */
// import { Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';

import { AbstractFirebaseService } from '../../shared/services';

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
    // @Inject(DOCUMENT) private document: Document
  ) {
    super(db, authService);

  }
  getListProduct(numberProduct): {} {
    return this.listProduct =
      this.getList({ query: { limitToFirst: numberProduct } });
  }
  get entityPath(): string {
    return `/smartphones`;
  }
  getLatestCountItems(): Observable<any[]> {
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
  /*   @HostListener('window:scroll', [])
    onWindowScroll(numberProduct) {
      console.log('asd')
      return this.listProduct =
        this.getList({ query: { limitToFirst: numberProduct } });
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
        console.log('phones ', phones, this.batch)

        this.lastKey = _.last(phones)['$key'];
        console.log(_.last(phones.$key)) /* ['$key']) */

        const newPhones = _.slice(phones, 0, this.batch);
        console.log('newPhones ', newPhones)

        const currentPhones = this.smartPhones.getValue();
        console.log('current ', currentPhones)

        if (this.lastKey === _.last(newPhones)['$key']) {
          this.finished = true;
        }
        this.smartPhones.next(_.concat(currentPhones, newPhones));
      }).take(1).subscribe();
    return this.smartPhones;
  }
}
