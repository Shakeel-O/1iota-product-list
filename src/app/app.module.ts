import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './page/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
