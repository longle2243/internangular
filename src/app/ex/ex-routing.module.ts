import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExComponent } from './ex.component';
import path from 'path';
import { Ex6th5Component } from './ex6th5/ex6th5.component';
import { Ex9th5Component } from './ex9th5/ex9th5.component';

const routes: Routes = [
  {path: '', component: ExComponent},
  {path: '6th5', component: Ex6th5Component},
  {path: '6th5',  loadChildren: () => import('./ex6th5/ex6th5.module').then(m => m.Ex6th5Module)},

  {path: '9th5', component: Ex9th5Component},
  {path: '9th5',  loadChildren: () => import('./ex9th5/ex9th5.module').then(m => m.Ex9th5Module)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExRoutingModule { }
