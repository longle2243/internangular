import { Component } from '@angular/core';
import { AppState } from '@app/state/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProducts } from '@app/state/cart/cart.selectors';
import { removeFromCart, resetCart } from '@app/state/cart/cart.actions';
import { Product } from '@app/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cart$: Observable<Product[]>;
  cartlength?: number;
  
  constructor(private store: Store<AppState>) {
    this.cart$ = store.select(selectProducts);
  }

  removeFromCart(id: number): void {
    this.store.dispatch(removeFromCart({ id: id }));
  }

  checkOutCart(): void {
    this.store.dispatch(resetCart());
  }
}
