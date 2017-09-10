// import { Injectable } from '@angular/core';
// import { AbstractFirebaseService } from '../../shared/services';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AuthService } from './../../shared/services/auth.service';
// import { UserService } from './../../shared/services/user.service';
// import { SaleItem } from './../models/sale-item';
// import { ShoppingCart } from './../models/shopping-cart';
// import { User } from './../models/user-model';

// @Injectable()
// export class ShoppingCartService extends AbstractFirebaseService<any> {
//     protected entityPath = '/users';
//     private user;

//     private shoppingCart: ShoppingCart;

//     constructor(
//         protected db: AngularFireDatabase,
//         protected authService: AuthService,

//         protected userService: UserService,

//     ) {
//         super(db, authService);
//         console.log('*-*-*');
//         this.authService.user.subscribe(u => this.user = u);
//         console.log(this.user);
//     }

//     addToCart(saleItem: SaleItem) {
//         this.userService.get(this.authService.uid).subscribe(x => this.user = x);
//         this.user.shoppingCart.saleItems.push(saleItem);
//         this.userService.update(this.user.id, this.user);
//     }
// }
