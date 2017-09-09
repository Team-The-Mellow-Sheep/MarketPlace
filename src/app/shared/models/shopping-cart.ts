import { SaleItem } from './sale-item';

export class ShoppingCart {
    constructor() {
        this.saleItems = [];
    }
    saleItems: SaleItem[];
}
