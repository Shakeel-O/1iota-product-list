import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() cartCard?: boolean;

  constructor(private cartService: CartService){}

  addToCart(product: Product) {
    this.cartService.addItemToCart(product);
  }

  removeFromCart(product: Product) {
    this.cartService.removeItemFromCart(product);
  }


}
