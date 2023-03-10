import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItemCount = 0;


  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.getCartSize();
    this.cartService.cartItems$.subscribe((carts) => {
      console.log('carts updated', carts);
      this.cartItemCount = this.cartService.getCartSize();
    });
  }
  ngOnInit() {
    console.log('headering');
  }

}
