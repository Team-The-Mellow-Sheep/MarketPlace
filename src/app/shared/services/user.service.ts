import { Injectable } from '@angular/core';
import { AbstractFirebaseService } from '../../shared/services';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from './../../shared/services/auth.service';
import { User } from './../models/user-model';
import { AngularFireAuth } from 'angularfire2/auth';
import { SaleItem } from './../models/sale-item';

@Injectable()
export class UserService extends AbstractFirebaseService<any> {
    // protected entityPath: string;

    users: FirebaseListObservable<User[]>;

    currentUser; // : FirebaseObjectObservable<any>;
    userId: string;
    constructor(protected db: AngularFireDatabase, protected authService: AuthService) {
        super(db, authService);

        authService.authState.subscribe(user => {
            if (user) {
                this.userId = authService.uid;
            }
        });

        this.currentUser = this.get(this.userId).subscribe(user => {
            if (user) {
                this.currentUser = user;
            }
        });
        console.log('*-*-*-*');
        console.log(this.userId);
        // console.log(JSON.stringify(this.currentUser));
    }

    userObservable;

    get entityPath(): string {
        return '/users';
    }

    GetShoppingCart(userId: string) {
        return this.currentUser.shoppingCart;
    }

    addToCart(saleItem: SaleItem) {
        console.log('######');
        console.log(this.currentUser);
        this.get(this.authService.uid).subscribe(x => this.currentUser = x);
        this.currentUser.shoppingCart.saleItems.push(saleItem);
        this.updateById(this.currentUser.id, this.currentUser);
    }

}
