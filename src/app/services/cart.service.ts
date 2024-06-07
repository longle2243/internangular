import { Injectable } from '@angular/core';
import { CartItem, Product } from '@app/interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    const currentCart = this.cartSubject.value;
    const existItem = currentCart.find(item => item.product.id === product.id);
    if (existItem) {
      existItem.amount += 1;
      this.cartSubject.next([...currentCart]);
    } else {
      const cartItem = {
        product: product,
        amount: 1,
      };
      this.cartSubject.next([...currentCart, cartItem]);
      // currentCart.push(cartItem);
      // this.cartSubject.next(currentCart);
    }
  }

  removeFromCartItem(id: number) {
    const currentCart = this.cartSubject.value;
    const existItem = currentCart.find(item => item.product.id === id);
    if (existItem && existItem.amount > 1) {
      existItem.amount -= 1;
      this.cartSubject.next([...currentCart]);
    }
  }

  removeAllFromCartItem(id: number) {
    const currentCart = this.cartSubject.value.filter(
      item => item.product.id !== id
    );
    this.cartSubject.next([...currentCart]);
  }

  removeAllFromCart() {
    this.cartSubject.next([]);
  }

  getAmount() {
    const currentCart = this.cartSubject.value;
    let totalAmount = 0;
    for (const item of currentCart) {
      totalAmount += item.amount;
    }
    return totalAmount;
  }
}
