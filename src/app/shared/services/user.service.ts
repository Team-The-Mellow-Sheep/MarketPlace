import { Injectable } from '@angular/core';
import { AbstractFirebaseService } from '../../shared/services';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from './../../shared/services/auth.service';
import { User } from './../models/user-model';
import { AngularFireAuth } from 'angularfire2/auth';
import { SaleItem } from './../models/sale-item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends AbstractFirebaseService<any> {
    // protected entityPath: string;

    users: FirebaseListObservable<User[]>;

    currentUser; // : FirebaseObjectObservable<any>;
    userId: string;
    listProduct;
    constructor(protected db: AngularFireDatabase, protected authService: AuthService) {
        super(db, authService);

        this.authService.authState.subscribe(user => {
            console.log('*-*-*-*');
            // console.log(user.uid);

            if (user) {
                this.userId = user.uid;
            }
            console.log('*-*-*-*');
            console.log(this.userId);
        });
        console.log('*-*-*-*');
        console.log(this.userId);

        this.currentUser = this.get(this.userId).subscribe(user => {
            if (user) {
                this.currentUser = user;
            }
            console.log(this.currentUser);

        });
    }

    userObservable;

    get entityPath(): string {
        return '/users';
    }

    getUser(queryUserId): Observable<any[]> {
        return this.getList({
            query: {
                orderByChild: 'userId',
                equalTo: queryUserId
            }
        });
    }
    GetShoppingCart() {
        return this.currentUser.shoppingCart;
    }

    addToCart(saleItem: SaleItem) {
        const uu = localStorage.getItem('loggedUserId');
        console.log(uu);
        this.getUser(uu).subscribe(x => {
            // this.currentUser = x[0];
            console.log('######user');
            console.log(x[0]);
            const us = new User(
                localStorage.getItem('loggedUserId'),
                x[0].username,
                x[0].name,
                x[0].email,
                x[0].addresses[0] ? x[0].addresses[0] : '',
            );
            console.log('######user');
            console.log(us);
            us.shoppingCart.saleItems.push(saleItem);
            this.updateById(this.currentUser.id, us);
        });
    }
    /* getProduct(queryProductId) {// : Observable<any> {

        console.log(queryProductId)
        const items = [];
        this.listProduct = this.getList({

            query: {
                orderByChild: 'iserId',
                equalTo: queryProductId
            }// queryProductId

        });
        // console.log(this.listProduct)
        //  this.listProduct.subscribe(x => console.log(x))
        return this.listProduct.map((item) => {

            item.forEach((product) => {
                this.get(product.$key)
                    .subscribe((phone) => {
                        items.push(phone);
                    });
            });
            console.log('sssssssssssssssssss ', items)
            return items;
        });
    }
 */
}
