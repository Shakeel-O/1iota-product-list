import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  title = '1iota-product-list';
  @Input() products?: Product[];
  @Input() cart?: boolean;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    if (!this.products) {
      this.getProductList();
    }
  }

  getProductList() {
    this.productService.getProductList().subscribe((products) => {
      this.products = products;
    });
  }
}
