import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Day1Component } from './day1/day1.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'day1',component: Day1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
