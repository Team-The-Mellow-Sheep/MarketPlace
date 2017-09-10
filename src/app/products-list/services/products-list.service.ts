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
  private smarthPhonesFilter: FirebaseListObservable<any[]>;
  private listProduct: FirebaseListObservable<any[]>;
  constructor(
    protected db: AngularFireDatabase,
    protected authService: AuthService,
  ) {
    super(db, authService);
  }

  get entityPath(): string {
    return `/smartphones`;
  }
  getPhonesWhenScroll(batch, prop, value, lastKey?) {

    let query;
    if (prop === '') {
      query = {
        orderByKey: true,
        limitToFirst: batch,
      };
    } else {
      query = {
        orderByChild: prop,
        startAt: value,
        endAt: value + '\uf8ff',
      };
    }
    if (lastKey) {
      query['startAt'] = lastKey;
    }
    return this.getList({ query });
  }

  getSmarthphones(prop, value, key?) {
    if (this.finished) {
      return;
    }
    this.getPhonesWhenScroll(this.batch + 1, prop, value, this.lastKey)
      .do(phones => {
        //  if (prop === '') {
        this.lastKey = _.last(phones)['$key'];
        // }

        //  let newPhones;
        // if (prop !== '') {
        // newPhones = _.slice(phones, 0, phones[phones.length - 1].$key);
        // } else {
        const newPhones = _.slice(phones, 0, this.batch);
        // }

        const currentPhones = this.smartPhones.getValue();
        //   if (prop !== '') {

        //   this.finished = true;

        // } else {
        if (this.lastKey === _.last(newPhones)['$key']) {
          this.finished = true;
        }
        // }
        if (prop === '') {
          this.smartPhones.next(_.concat(currentPhones, newPhones));
        }

      }).take(1).subscribe();

    return this.smartPhones;
  }
  isFInishedScroll() {
    return this.finished;
  }
  getPhonesFilter(prop, value) {
    this.listProduct = this.getPhonesWhenScroll(0, prop, value);

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
