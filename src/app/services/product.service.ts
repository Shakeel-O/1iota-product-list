import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable, tap } from 'rxjs';
import { Product } from '../shared/interfaces/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json'

  constructor(private http: HttpClient, private router: Router
  ) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<{ data: Product[], result: string }>(this.apiUrl).pipe(map(r => r.data));
  }

  getProduct(productId: string): Observable<Product> {
    return this.getProductList().pipe(
      map(products => products.find(product => product.id === productId)),
      tap(product => {
        if (!product) {
          console.log(`Product with productId=${productId} not found`);
          this.router.navigate(['/not-found']);
        }
      }),
      filter((product: Product | undefined): product is Product => product !== undefined) //ensures nothing undefined is returned
    );

  }
}
