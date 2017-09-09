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
  getListProductByCamera(prop, mp) {
    // cameraMP=
    if (prop === '') {
      return;
    }
    this.listProduct =
      this.getList({
        query: {
          orderByChild: prop, // equalTo: '12 MP' } })
          startAt: mp,
          endAt: mp + 'uf8ff',
        }
      });
    //  .once("value")
    // console.log(this.listProduct)-tova dava subscribe
    //  const filtered = this.listProduct.map((item) => item.filter(it => it.title === 'Samsung Galaxy S8 Active'));
    this.listProduct.subscribe(x => console.log(x))
    //  filtered.subscribe(x => console.log(x))
    //  return this.getLatestCountItems();
  } // towa go otkomentirah
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
    //  this.smartPhones.subscribe(c => console.log(c))
    return this.smartPhones;
  }
  getPhonesCamera(numMP) {
    /* return this.listProduct.map((item) => {
      const items = [];

      item.forEach((product) => {
        this.get(product.$key)
          .subscribe((phone) => {
            items.push(phone);
          });
      });
      console.log(items)
      return items;
    });
 */
  }
}
