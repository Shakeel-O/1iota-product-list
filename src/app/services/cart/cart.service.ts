import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = JSON.parse(
    sessionStorage.getItem('cartItems') || '[]'
  );
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);
  cartItems$ = this.cartItemsSubject.asObservable();

  addItemToCart(product: Product): void {
    this.cartItems.push(product);
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItems(): Product[] {
    this.cartItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
    return this.cartItems;
  }

  getCartSize(): number {
    this.cartItems = this.getCartItems();
    return this.cartItems.length;
  }

  removeItemFromCart(product: Product) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].SKU == product.SKU) {
        this.cartItems.splice(i, 1);
        sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.cartItemsSubject.next(this.cartItems);
        break;
      }
    }
    this.getCartItems();
  }
}
