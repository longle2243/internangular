import { Component } from '@angular/core';
import { Product } from '@app/interfaces/product.interface';
import { CartService } from '@app/services/cart.service';

@Component({
  selector: 'app-cartrxjs',
  templateUrl: './cartrxjs.component.html',
  styleUrl: './cartrxjs.component.scss',
})
export class CartrxjsComponent {
  cart$ = this.cartSV.cart$;
  constructor(private cartSV: CartService) {}

  addToCart(product: Product): void {
    this.cartSV.addToCart(product);
  }

  removeFromCart(id: number): void {
    console.log(id);
    this.cartSV.removeFromCart(id)
  }

  checkOutCart(): void {}
}
