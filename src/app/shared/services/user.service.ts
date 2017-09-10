import { Injectable } from '@angular/core';
import { AbstractFirebaseService } from '../../shared/services';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './../../shared/services/auth.service';
import { User } from './../models/user-model';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService extends AbstractFirebaseService<any> {
    // protected entityPath: string;

    users: FirebaseListObservable<User[]>;
    userId: string;
    constructor(protected db: AngularFireDatabase, protected authService: AuthService) {
        super(db, authService);

        authService.authState.subscribe(user => {
            if (user) {
                this.userId = user.uid;
            }
        });
    }

    userObservable;

    get entityPath(): string {
        return '/users';
    }
}