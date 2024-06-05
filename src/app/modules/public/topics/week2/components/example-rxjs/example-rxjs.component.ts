import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '@app/services/cart.service';
import { Subject, takeUntil } from 'rxjs';
// import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-example-rxjs',
  templateUrl: './example-rxjs.component.html',
  styleUrl: './example-rxjs.component.scss',
})
export class ExampleRxjsComponent implements OnInit, OnDestroy {
  cart$ = this.cartSV.cart$;
  private destroy$ = new Subject<void>();
  constructor(private cartSV: CartService) {}

  ngOnInit(): void {
    console.log('Init');

    this.cart$.pipe(takeUntil(this.destroy$)).subscribe(result => {
      console.log(result);
    });

    // this.cart$.pipe(takeUntilDestroyed()).subscribe(result => {
    //   console.log(result);
    // });
  }

  ngOnDestroy(): void {
    console.log('Destroyed');
    this.destroy$.next();
    this.destroy$.complete();
  }
}
