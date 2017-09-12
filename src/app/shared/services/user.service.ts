import { Injectable } from '@angular/core';
import { AbstractFirebaseService } from '../../shared/services';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from './../../shared/services/auth.service';
import { User } from './../models/user-model';
import { AngularFireAuth } from 'angularfire2/auth';
import { SaleItem } from './../models/sale-item';
import { ShoppingCart } from './../models/shopping-cart';
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
        });

        this.currentUser = this.get(this.userId).subscribe(user => {
            if (user) {
                this.currentUser = user;
            }

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
            saleItem.price = 280;
            const us = new User(
                localStorage.getItem('loggedUserId'),
                x[0].username,
                x[0].name,
                x[0].email,
                x[0].addresses[0] ? x[0].addresses[0] : '',
            );

            x[0].name = 'John';
            x[0].shoppingCart = new ShoppingCart();
            console.log(us.shoppingCart);
            x[0].shoppingCart.saleItems.push(saleItem);

            this.updateById('/users/', x[0]);
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
