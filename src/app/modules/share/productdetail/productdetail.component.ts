import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { Product } from '@app/state/cart/product.interface';
// import { selectProducts } from '@app/state/cart/cart.selectors';
import { AppState } from '@app/state/app.state';
import { addToCart, removeFromCart } from '@app/state/cart/cart.actions';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.scss',
})
export class ProductdetailComponent {
  // cart$: Observable<Product[]>;

  products = [
    { id: 1, name: 'Iphone 11', price: 10 },
    { id: 2, name: 'Iphone 12', price: 10 },
    { id: 3, name: 'Iphone 13', price: 10 },
    { id: 4, name: 'Iphone 15', price: 10 },
    { id: 5, name: 'Iphone 16', price: 10 },
    { id: 6, name: 'Iphone 17', price: 10 },
    { id: 7, name: 'Iphone 18', price: 10 },
    { id: 7, name: 'Iphone 18', price: 10 },
  ];

  constructor(private store: Store<AppState>) {
    // this.cart$ = store.select(selectProducts);
  }

  addToCart(id: number): void {
    this.store.dispatch(addToCart({ product: this.products[id] }));
  }

  removeFromCart(id: number): void {
    console.log(id);
    this.store.dispatch(removeFromCart({ id }));
  }
}
