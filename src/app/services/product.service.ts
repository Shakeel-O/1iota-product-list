import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json'

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.http.get<{ data: Product[], result: string }>(this.apiUrl).pipe(map(r => r.data));
  }
}
