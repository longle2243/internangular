import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '@app/interfaces/product.interface';
import { AuthService } from '@app/services/auth.service';
import { CartService } from '@app/services/cart.service';
import { FakeapiService } from '@app/services/fakeapi.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  cart$ = this.cartSV.cart$;
  cartdropdown?: CartItem[];
  amountItem?: number;
  facart = faCartShopping;

  private destroy$ = new Subject<void>();

  constructor(
    private authSV: AuthService,
    private router: Router,
    private fakeSV: FakeapiService,
    private cartSV: CartService
  ) {}

  ngOnInit(): void {
    this.cart$.pipe(takeUntil(this.destroy$)).subscribe(result => {
      this.cartdropdown = result;
      this.amountItem = this.cartSV.getAmount();
    });
  }

  isLoggedIn(): boolean {
    return this.authSV.isAuthenticated();
  }

  logout() {
    this.authSV.logout();
    this.router.navigateByUrl('/login');
  }

  unauthorized() {
    this.fakeSV.fake().subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
