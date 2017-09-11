import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { IEntity } from '../../shared/models/IEntity';

@Injectable()
export abstract class AbstractFirebaseService<T extends IEntity>{
  protected abstract get entityPath(): string;
  protected list: FirebaseListObservable<any[]>;
  constructor(protected db: AngularFireDatabase, protected authService: AuthService) {
    this.list = db.list(this.entityPath);
  }

  get(entityId: string): Observable<any> {
    // console.log('xxxxx');
    // console.log(this.entityPath);
    // console.log(entityId);
    return this.db.object(`${this.entityPath}/${entityId}`);
  }

  getList(options?: Object) {
    return this.db.list(`${this.entityPath}`, options);
  }

  update(entity: T, changes: Object) {
    return this.list.update(entity.$key, changes);
  }

  delete(entity: T) {
    return this.list.remove(entity.$key);
  }
  create(entity: T) {
    return this.list.push(entity);
  }

  updateById(id: string, entity: T) {
    console.log('++++entity');
    console.log(entity);
    this.list.update(this.entityPath + '/' + id, entity) ;
  }
}

