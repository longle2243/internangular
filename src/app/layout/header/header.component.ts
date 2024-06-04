import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '@app/interfaces/product.interface';
import { AuthService } from '@app/services/auth.service';
import { CartService } from '@app/services/cart.service';
import { FakeapiService } from '@app/services/fakeapi.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject, Subscription, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  cart$ = this.cartSV.cart$;
  cartdropdown?: CartItem[];
  amountItem?: number;
  facart = faCartShopping;

  private destroy$ = new Subject<void>();
  private subscription?: Subscription;
  private exObservable?: Observable<number>;

  constructor(
    private authSV: AuthService,
    private router: Router,
    private fakeSV: FakeapiService,
    private cartSV: CartService
  ) {
    const source = interval(1000);
    const childsub = source.subscribe(val => {
      console.log(val);
    });
    this.subscription?.add(childsub);

    // setTimeout(() => {
    //   this.subscription?.unsubscribe();
    // }, 1000);

    // this.exObservable = new Observable(sub => {
    //   let count = 0;
    //   const intervalID = setInterval(() => {
    //     sub.next(count++);
    //     console.log(sub);
    //   }, 1000);
    //   return () => {
    //     clearInterval(intervalID);
    //   };
    // });
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
    this.subscription?.unsubscribe();
    console.log('haha');
  }

  ngOnInit(): void {
    this.cart$.pipe(takeUntil(this.destroy$)).subscribe(result => {
      this.cartdropdown = result;
      // console.log(result);
      this.amountItem = this.getAmount(result);
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

  getAmount(cart: CartItem[]) {
    let totalAmount = 0;
    for (const item of cart) {
      totalAmount += item.amount;
    }
    return totalAmount;
  }
}
