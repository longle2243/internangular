import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { CartComponent } from './modules/share/cart/cart.component';
import { ProductdetailComponent } from './modules/share/productdetail/productdetail.component';
import { ProductRxjsComponent } from './modules/share/product-rxjs/product-rxjs.component';
import { CartrxjsComponent } from './modules/share/cartrxjs/cartrxjs.component';

const routes: Routes = [
  {
    path: 'private',
    loadChildren: () =>
      import('./modules/private/private.module').then(m => m.PrivateModule),
    canActivate: [authGuard],
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./modules/public/public.module').then(m => m.PublicModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/authentication.module').then(
        m => m.AuthenticationModule
      ),
  },
  {
    path: 'products',
    component: ProductdetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'products2',
    component: ProductRxjsComponent
  },
  {
    path: 'cartrxjs',
    component: CartrxjsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
