import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { LocalStorageService } from 'src/app/services/localStorage/localStorage.service';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  recentProducts!: Product[];
  selectedSize!: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private localStorageService: LocalStorageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      if (productId){
        this.productService.getProduct(productId).subscribe((product) => {
          this.product = product;
          this.selectedSize = this.product.sizes[0];
          this.localStorageService.addRecentlyViewed(product);
          this.recentProducts = this.localStorageService.getRecentlyViewed();
        });
      }

    });
  }

  addToCart(product: Product) {
    this.cartService.addItemToCart(product);
  }
}
