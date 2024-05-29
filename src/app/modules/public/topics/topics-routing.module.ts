import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent},
  { path: 'week1', loadChildren: () => import('./week1/week1.module').then(m => m.Week1Module)},
  { path: 'week2', loadChildren: () => import('./week2/week2.module').then(m => m.Week2Module)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
