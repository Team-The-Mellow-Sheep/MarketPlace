export class SaleItem {
    productId: string;
    productName: string;
    quantity: number;
    price: number;

    constructor(
        productId: string,
        productName: string,
        quantity: number,
        price: number
    ) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }
}

