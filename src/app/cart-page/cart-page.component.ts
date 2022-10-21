import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  totalPrice:number=0;
  constructor(private cartService:CartService) { 
    this.setCart();
  }
  ngOnInit(): void {
    //get total price of item in cart
    this.totalPrice = this.cart.total;

  }
  setCart(){
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cart.total;

  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.totalPrice = this.cart.total;

    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.totalPrice = this.cart.total;

    this.setCart();
  }

}
