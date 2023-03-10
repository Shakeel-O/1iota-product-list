import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartItemCount = 0;


  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.getCartSize();
    this.cartService.cartItems$.subscribe(() => {
      this.cartItemCount = this.cartService.getCartSize();
    });
  }

}
