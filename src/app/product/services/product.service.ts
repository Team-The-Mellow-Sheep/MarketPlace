import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './../../shared/services/auth.service';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AbstractFirebaseService } from '../../shared/services';


@Injectable()
export class ProductService extends AbstractFirebaseService<any> {

  constructor(protected db: AngularFireDatabase, protected authService: AuthService) {
    super(db, authService);
  }
  get entityPath(): string {
    return `/smartphones`;
  }
  getProduct(queryProductId): Observable<any[]> {
    return this.getList({
      query: {
        orderByChild: 'id',
        equalTo: queryProductId
      }
    });
  }
}
