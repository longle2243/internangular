import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleRxjsComponent } from './components/example-rxjs/example-rxjs.component';
import { ExampleSubscriptionComponent } from './components/example-subscription/example-subscription.component';

const routes: Routes = [
  { path: '', component: ExampleRxjsComponent },
  { path: 'subscription', component: ExampleSubscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Week2RoutingModule {}
