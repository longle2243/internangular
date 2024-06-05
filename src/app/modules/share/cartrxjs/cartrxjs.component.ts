import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '@app/interfaces/product.interface';
import { CartService } from '@app/services/cart.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cartrxjs',
  templateUrl: './cartrxjs.component.html',
  styleUrl: './cartrxjs.component.scss',
})
export class CartrxjsComponent implements OnInit, OnDestroy {
  cart$ = this.cartSV.cart$;
  amountItem?: number;

  private destroy$ = new Subject<void>();

  constructor(private cartSV: CartService) {}

  ngOnInit(): void {
    this.cart$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.amountItem = this.cartSV.getAmount();
    });
  }

  addToCart(product: Product): void {
    this.cartSV.addToCart(product);
  }

  removeFromCart(id: number): void {
    this.cartSV.removeFromCartItem(id);
  }

  removeAllFromCart(id: number): void {
    this.cartSV.removeAllFromCartItem(id);
  }

  checkOutCart(): void {
    this.cartSV.removeAllFromCart();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
