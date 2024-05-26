import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterExercisesComponent } from './router-exercises.component';

const routes: Routes = [
  { path: '', component: RouterExercisesComponent },
  { path: '6may', loadChildren: () => import('../6May/router-ex6may/router-ex6may.module').then(m => m.RouterEx6mayModule) },
  { path: '9may', loadChildren: () => import('../9May/router-ex9may/router-ex9may.module').then(m => m.RouterEx9mayModule) },
  { path: '24may', loadChildren: () => import('../24May/router-ex24may/router-ex24may.module').then(m => m.RouterEx24mayModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterExercisesRoutingModule { }
