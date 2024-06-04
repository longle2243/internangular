import { ChangeDetectorRef, Component } from '@angular/core';
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
  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef
  ) {
    this.cart$ = store.select(selectProducts);
  }

  // addToCart(id: number): void {
  //   this.store.dispatch(addToCart({ product: this.products[id] }));
  // }

  removeFromCart(id: number): void {
    console.log(id);
    this.store.dispatch(removeFromCart({ id: id }));
    // this.cdr.detectChanges();
  }

  checkOutCart(): void{
    this.store.dispatch(resetCart());
  }
}
