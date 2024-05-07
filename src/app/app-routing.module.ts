import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Day2Component } from './day2/day2.component';
import { Day1Component } from './day1/day1.component';
import { Day6Component } from './day6/day6.component';
import { Ex1Component } from './ex/ex1/ex1.component';
import { ExComponent } from './ex/ex.component';
import { Day7Component } from './day7/day7.component';
import { Day3Component } from './day3/day3.component';
import { Day5Component } from './day5/day5.component';
import { Day4Component } from './day4/day4.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'day1', component: Day1Component},
  {path: 'day2', component: Day2Component},
  {path: 'day3', component: Day3Component},
  {path: 'day4', component: Day4Component},
  {path: 'day5', component: Day5Component},
  {path: 'day6', component: Day6Component},
  {path: 'day7', component: Day7Component},

  {path: 'day1', loadChildren: () => import('./day1/day1.module').then(m => m.Day1Module) },
  {path: 'day6', loadChildren: () => import('./day6/day6.module').then(m => m.Day6Module) },
  {path: 'ex', loadChildren: () => import('./ex/ex.module').then(m => m.ExModule)},

  {path: 'ex1', component: Ex1Component},
  {path: 'ex', component: ExComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
