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
    }
  }

  removeFromCart(id: number) {
    const currentCart = this.cartSubject.value.filter(
      item => item.product.id !== id
    );
    console.log(this.cartSubject.value);
    console.log(currentCart);
    this.cartSubject.next([...currentCart]);
  }
}
//   getAmount(){
//     const currentCart = this.cartSubject.value;
//     let totalAmount = 0;
//     for(const item of currentCart){
//       totalAmount += item.amount;
//     }
//     return totalAmount;
//   }
// }

// interface CartState {
//   count: number;
// }
// const initialState: CartState = {
//   count: 0,
// };
