import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export abstract class AbstractFirebaseService<T extends IEntity> {
  protected abstract get entityPath(): string;
  protected list: FirebaseListObservable<any[]>;
  constructor(protected db: AngularFireDatabase, protected authService: AuthService) {
    this.list = db.list(this.entityPath);
  }
  get(entityId: string) {
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
}
export interface IEntity {
  $key?: string;
}
