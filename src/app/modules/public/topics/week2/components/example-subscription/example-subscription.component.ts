import { Component, OnDestroy } from '@angular/core';
import { CartService } from '@app/services/cart.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-example-subscription',
  templateUrl: './example-subscription.component.html',
  styleUrl: './example-subscription.component.scss',
})
export class ExampleSubscriptionComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private cartSV: CartService) {
    const source = interval(1000);

    const childsub = source.subscribe(value => {
      console.log(value);
    });

    this.subscription?.add(childsub);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log('run destroy');
  }
}
