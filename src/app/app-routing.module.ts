import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'private', loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule), canActivate: [authGuard] },
  { path: 'public', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)},
  { path: 'login', loadChildren: () => import('./modules/auth/authentication.module').then(m => m.AuthenticationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
