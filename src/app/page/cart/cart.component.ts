import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItemCount = 0;
  cartProducts?: Product[];

  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.getCartSize();
    this.cartProducts = this.cartService.getCartItems();
    this.cartService.cartItems$.subscribe(() => {
      this.cartItemCount = this.cartService.getCartSize();
      this.cartProducts = this.cartService.getCartItems();
    });
  }
}
