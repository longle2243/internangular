import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterTopicsComponent } from './router-topics.component';

const routes: Routes = [
  { path: '', component: RouterTopicsComponent },
  { path: 'week1', loadChildren: () => import('../week1/router-week1/router-week1.module').then(m => m.RouterWeek1Module) },
  { path: 'week2', loadChildren: () => import('../week2/router-week2/router-week2.module').then(m => m.RouterWeek2Module) }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterTopicsRoutingModule { }
