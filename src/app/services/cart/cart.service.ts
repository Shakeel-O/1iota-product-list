import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);
  cartItems$ = this.cartItemsSubject.asObservable();


  addItemToCart(product: Product): void {
    this.cartItems.push(product);
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItems(): Product[] {
      const cartItems = JSON.parse(sessionStorage.getItem('cartItems')  || '[]');
      return cartItems;
    }

  getCartSize(): number {
    this.cartItems = this.getCartItems();
    return this.cartItems.length;
  }
}
