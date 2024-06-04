import { Component } from '@angular/core';
import { Product } from '@app/interfaces/product.interface';
import { AppState } from '@app/state/app.state';
import { selectProducts } from '@app/state/cart/cart.selectors';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-carticon',
  templateUrl: './carticon.component.html',
  styleUrl: './carticon.component.scss',
})
export class CarticonComponent {
  facart = faCartShopping;
  cart$: Observable<Product[]>;
  cartlength?: number;

  // cartCount$ = this.store.pipe(select(selectCartCount));
  constructor(private store: Store<AppState>) {
    this.cart$ = store.select(selectProducts);
    // this.cart$.subscribe(result => {console.log(result);
    // });
  }
}
