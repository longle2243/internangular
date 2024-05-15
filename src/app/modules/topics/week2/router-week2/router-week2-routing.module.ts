import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterWeek2Component } from './router-week2.component';

const routes: Routes = [
  {path: '', component: RouterWeek2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterWeek2RoutingModule { }
