import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { authGuard } from './auth.guard';
// import { authGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'exercises', loadChildren: () => import('./modules/exercises/router-exercises/router-exercises.module').then(m => m.RouterExercisesModule), canActivate: [authGuard] },
  { path: 'topics', loadChildren: () => import('./modules/topics/router-topics/router-topics.module').then(m => m.RouterTopicsModule), canActivate: [authGuard] },
  { path: 'auth', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule) },
  // { path: 'auth', component: AuthenticationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
