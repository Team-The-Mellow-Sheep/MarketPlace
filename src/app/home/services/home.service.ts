// import { Home } from './../models';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { AngularFireModule } from 'angularFire2';
import {
  FirebaseListObservable,
  FirebaseObjectObservable,
  AngularFireDatabase
} from 'angularfire2/database';

import { AuthService, AbstractFirebaseService } from '../../shared/services';



@Injectable()
export class HomeService extends AbstractFirebaseService<{ $key: string }> {
  private homeListProduct: FirebaseListObservable<any[]>;
  public items;
  constructor(
    protected db: AngularFireDatabase,
    protected authService: AuthService
  ) {
    super(db, authService);
    this.homeListProduct =
      this.getList({ query: { limitToFirst: 4 } });
  }
  get entityPath(): string {
    return `/smartphones`;
  }
  getLatestThreeItems(): Observable<any[]> {
    return this.homeListProduct.map((item) => {
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
