import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Day2Component } from './day2/day2.component';
import { Day1Component } from './day1/day1.component';
import { Day6Component } from './day6/day6.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'day2', component: Day2Component},
  {path:'day1', component: Day1Component},
  { path: 'day1', loadChildren: () => import('./day1/day1.module').then(m => m.Day1Module) },
  {path:'day6', component: Day6Component},
  { path: 'day6', loadChildren: () => import('./day6/day6.module').then(m => m.Day6Module) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
