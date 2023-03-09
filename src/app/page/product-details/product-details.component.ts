import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/localStorage.service';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  recentProducts!: Product[];
  selectedSize!: string;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private localStorageService: LocalStorageService
    ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProduct(productId).subscribe((product) => {
        this.product = product;
        this.selectedSize = this.product.sizes[0];
        this.localStorageService.addRecentlyViewed(product);
        this.recentProducts = this.localStorageService.getRecentlyViewed();
      });

    }
  }
}
