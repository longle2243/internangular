import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Week2RoutingModule } from './week2-routing.module';
import { ExampleRxjsComponent } from './components/example-rxjs/example-rxjs.component';
import { ExampleSubscriptionComponent } from './components/example-subscription/example-subscription.component';

@NgModule({
  declarations: [
    ExampleRxjsComponent,
    ExampleSubscriptionComponent
  ],
  imports: [CommonModule, Week2RoutingModule],
})
export class Week2Module {}
