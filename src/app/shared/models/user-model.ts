import { IEntity } from '../models/IEntity';
import { ShoppingCart } from './shopping-cart';
export class User {
    constructor(userId: string, username: string, name: string, email: string, address: string) {
        this.shoppingCart = new ShoppingCart();
        this.addresses = [];
        if (address) {
            this.addresses.push(address);
        }
        this.userId = userId;
        this.username = username;
        this.name = name;
        this.email = email;
        this.isAdmin = false;
    }
    userId: string;
    username: string;
    name: string;
    email: string;
    addresses: string[];
    shoppingCart: ShoppingCart;
    isAdmin: boolean;

}
