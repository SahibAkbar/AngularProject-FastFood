import { CartItem } from "./CartItem";

export class Cart {
    items:CartItem[] = []; ; 

    get total():number{
        let totalPrice = 0;
        this.items.forEach(items => {
            totalPrice += items.getprice();
        });
        return totalPrice;
    }
}