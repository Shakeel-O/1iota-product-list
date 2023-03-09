import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  addRecentlyViewed(product: Product) {
    const recentlyViewed = this.getRecentlyViewed();
    if (!this.recentlyViewedExists(product)) {
      if (recentlyViewed.length >= 4) {
        recentlyViewed.pop();
      }
      recentlyViewed.unshift(product);
      localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }
  }

  getRecentlyViewed(): Product[] {
    const recentlyViewed = JSON.parse(
      localStorage.getItem('recentlyViewed') || '[]'
    );
    return recentlyViewed;
  }

  recentlyViewedExists(product: Product): boolean {
    const recentlyViewed: Product[] = this.getRecentlyViewed();
    return recentlyViewed.some(p => p.id === product.id);

  }
}
