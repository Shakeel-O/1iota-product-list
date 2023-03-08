import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './shared/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '1iota-product-list';
  product!: Product;

  constructor(private productService: ProductService) { }

  
  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    console.log('heeeeeeyy')
    this.productService.getProductList().subscribe(products => {
      console.log(products)

      this.product = products[0];
    });
  }
}
