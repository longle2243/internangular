import { Component } from '@angular/core';
import { Product } from '@app/interfaces/product.interface';
import { CartService } from '@app/services/cart.service';
import { StateService } from '@app/services/state.service';

@Component({
  selector: 'app-product-rxjs',
  templateUrl: './product-rxjs.component.html',
  styleUrl: './product-rxjs.component.scss',
})
export class ProductRxjsComponent {
  products: Product[] = [];
  cart$ = this.cartSV.cart$;

  productsfake = [
    { id: 1, name: 'Iphone 11', price: 10 },
    { id: 2, name: 'Iphone 12', price: 10 },
    { id: 3, name: 'Iphone 13', price: 10 },
    { id: 4, name: 'Iphone 15', price: 10 },
    { id: 5, name: 'Iphone 16', price: 10 },
    { id: 6, name: 'Iphone 17', price: 10 },
    { id: 7, name: 'Iphone 18', price: 10 },
    { id: 7, name: 'Iphone 18', price: 10 },
  ];

  constructor(
    private stateService: StateService,
    private cartSV: CartService
  ) {
    // this.fakeData();
  }

  // fakeData() {
  //   if (typeof localStorage !== 'undefined') {
  //     localStorage.setItem('products', JSON.stringify(this.products));
  //   }
  // }

  // fakeData() {
  //   if (typeof localStorage !== 'undefined') {
  //     localStorage.setItem('products', JSON.stringify(this.productsfake));
  //   }
  // }

  // ngOnInit(): void {
  // this.products = this.stateService.getProducts();
  // this.fakeData();
  // }

  removeProduct(productId: number): void {
    this.stateService.removeProduct(productId);
    this.products = this.stateService.getProducts();
  }

  onClick(product: Product) {
    this.cartSV.addToCart(product);
  }
}
